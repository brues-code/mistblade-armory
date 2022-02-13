import { Request, Response } from "express";
import getCharSheet from "../service/fetch-character-data";

interface Params {
  name: string;
}

const controllers = {
  getCharSheet: (req: Request, res: Response) => {
    const params = (req.params as unknown) as Params;
    getCharSheet(params.name).then(r => {
      res.json(r);
    });
  }
};

export default controllers;
