import { Response } from "express";

const handleHttp = (
  response: Response,
  error: string,
  errorRaw?: object | string
) => {
  console.log(errorRaw);
  response.status(500);
  response.send({ error });
};

export { handleHttp };
