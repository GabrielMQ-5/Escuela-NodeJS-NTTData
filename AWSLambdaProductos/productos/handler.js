import {
  DynamoDB,
  DynamoDBClient,
  PutItemCommand,
  UpdateItemCommand,
  DeleteItemCommand
} from "@aws-sdk/client-dynamodb";

const dynamo = new DynamoDB({});
const client = new DynamoDBClient({});
const TABLE_NAME = process.env.GREETING_TABLE;

export const getHandler = async (event) => {
  let statusCode = 200;
  let body;
  try {
    let responseDdb = await dynamo.scan({
      TableName: TABLE_NAME,
    });
    body = responseDdb.Items;
  } catch (err) {
    statusCode = 500;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  const headers = {
    "Content-Type": "application/json",
  };
  const response = {
    statusCode,
    body,
    headers,
  };
  return response;
};

export const putHandler = async (event) => {
  let statusCode = 201;
  let body;
  try {
    let requestJSON = event.body;
    body = await client.send(
      new PutItemCommand({
        ConditionExpression: "attribute_not_exists(id)",
        TableName: TABLE_NAME,
        Item: {
          id: { "S": requestJSON.id },
          almacenes: { "SS": requestJSON.almacenes },
          nombre: { "S": requestJSON.nombre },
          stock: { "N": requestJSON.stock.toString() },
        },
      })
    );
  } catch (err) {
    statusCode = 500;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  const headers = {
    "Content-Type": "application/json",
  };
  const response = {
    statusCode,
    body,
    headers,
  };
  return response;
};

export const updateHandler = async (event) => {
  let statusCode = 201;
  let body;
  try {
    let requestJSON = event.body;
    body = await client.send(
      new UpdateItemCommand({
        ConditionExpression: "attribute_exists(id)",
        TableName: TABLE_NAME,
        Key: {
          id: { "S": requestJSON.id },
        },
        UpdateExpression: "set almacenes = :a, nombre = :n, stock = :s",
        ExpressionAttributeValues: {
          ":a": { "SS": requestJSON.almacenes },
          ":n": { "S": requestJSON.nombre },
          ":s": { "N": requestJSON.stock.toString() },
        },
        ReturnValues: "ALL_NEW",
      })
    );
  } catch (err) {
    statusCode = 500;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  const headers = {
    "Content-Type": "application/json",
  };
  const response = {
    statusCode,
    body,
    headers,
  };
  return response;
};

export const deleteHandler = async (event) => {
  let statusCode = 201;
  let body;
  try {
    let requestJSON = event.body;
    body = await client.send(
      new DeleteItemCommand({
        ConditionExpression: "attribute_exists(id)",
        TableName: TABLE_NAME,
        Key: {
          id: { "S": requestJSON.id },
        },
      })
    );
  } catch (err) {
    statusCode = 500;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  const headers = {
    "Content-Type": "application/json",
  };
  const response = {
    statusCode,
    body,
    headers,
  };
  return response;
};
