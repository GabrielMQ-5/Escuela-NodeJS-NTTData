const AWS = require("@aws-sdk/client-dynamodb");
const dynamo = new AWS.Dynamo({});

const TABLE_NAME = process.env.GREETING_TABLE;

exports.saveHello = async (event) => {
  console.log(event);

  const name = event.queryStringParameters.name; // RECUPERA EL VALOR POR QUERY PARAM

  const item = {
    id: { "S": name },
    name: { "S": name },
    date: { "S": Date.now().toString() },
  };

  console.log(item);
  const savedItem = await saveItem(item);

  return {
    statusCode: 200,
    body: JSON.stringify(savedItem),
  };
};

exports.getHello = async (event) => {
    const name = event.queryStringParameters.name;

    const item = await getItem(name);

    console.log("=====");
    return {
        statusCode: 200,
        body: JSON.stringify(item),
    }
}

async function getItem(name) {
    console.log("GetItem method");
    
    const params = {
        Key : {
            id: { "S": name },
        },
        TableName : TABLE_NAME,
    };
    
    console.log("DynamoDb query params: " + params);

    let item = await dynamo.getItem(params);
    console.log("Item: " + JSON.stringify(item));
    return item;
}

async function saveItem(item) {
    const params = {
        TableName : TABLE_NAME,
        Item : item
    };

    console.log(params);

    let response = await dynamo.putItem(params);
    return response;
}
