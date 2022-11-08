import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/items";

const insertCar = async (item: Car) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const getCar = async (id: string) => {
  const responseItem = await ItemModel.findOne({ _id: id });
  return responseItem;
};

const getCars = async (filter: string) => {
  const responseItem = await ItemModel.find({ filter });
  return responseItem;
};

const updateCar = async (id: string, item: Car) => {
  const responseUpdate = await ItemModel.updateOne({ _id: id }, item);
  return responseUpdate;
};

const deleteCar = async (id: string) => {
  const responseDelete = await ItemModel.findOneAndDelete({ _id: id });
  return responseDelete;
};

export { insertCar, getCar, getCars, updateCar, deleteCar };
