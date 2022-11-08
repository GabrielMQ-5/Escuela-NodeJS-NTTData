import { model, Schema } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
  {
    name: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      unique: true,
      type: String,
    },
    description: {
      default: "Nuevo usuario creado...",
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = model("users", UserSchema);
export default UserModel;
