import { model, Schema } from "mongoose";
import { Car } from "../interfaces/car.interface";

const ItemSchema = new Schema<Car>(
  {
    modelCar: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    fuel: {
      type: String,
      enum: ["gasoline", "electric", "diesel", "alcohol"],
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ItemModel = model("items", ItemSchema);
export default ItemModel;
