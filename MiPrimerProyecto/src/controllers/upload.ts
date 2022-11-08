import { Response } from "express";
import { RequestExt } from "../interfaces/req-ext";
import { Storage } from "../interfaces/storage.interface";
import { registerUpload } from "../services/storage";
import { handleHttp } from "../utils/error.handler";

const addFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    if (!file || !user) throw new Error("BAD_REQUEST");

    const dataToRegister: Storage = {
      fileName: file.filename,
      idUser: user.id,
      path: file.path,
    };
    const responseItem = await registerUpload(dataToRegister);
    res.send(responseItem);
  } catch (err) {
    handleHttp(res, "BAD_REQUEST");
  }
};

export { addFile };
