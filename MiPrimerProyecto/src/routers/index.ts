import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;

const router = Router();
const cleanFileName = (fileName: string) => fileName.split(".").shift();
readdirSync(PATH_ROUTER).filter((filename) => {
  const clearName = cleanFileName(filename);
  if (clearName !== "index") {
    import(`./${clearName}`).then((moduleRouter) => {
      console.log(`Se configura la ruta: /${clearName}`);
      router.use(`/${clearName}`, moduleRouter.router);
    });
  }
});

export { router };
