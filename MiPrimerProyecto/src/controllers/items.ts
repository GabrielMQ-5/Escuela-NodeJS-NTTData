import { Request, Response } from "express";
import {
  insertCar,
  getCar,
  getCars,
  updateCar,
  deleteCar,
} from "../services/item";
import handleHttp from "../utils/error.handler";

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getCar(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM", e);
  }
};

const getItems = async ({ params }: Request, res: Response) => {
  try {
    const { filter } = params;
    const response = await getCars(filter);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateCar(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};

const addItem = async ({ body }: Request, res: Response) => {
  try {
    const response = await insertCar(body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_ADD_ITEM");
  }
};

const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteCar(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export { getItem, getItems, addItem, updateItem, deleteItem };
