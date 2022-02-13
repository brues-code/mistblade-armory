import { Request, Response } from "express";
import getCharSheet from "../service/fetch-character-data";

const controllers = {
  getCharSheet: (req: Request, res: Response) => {
    getCharSheet().then(r => {
      res.json(r);
    });
  }
};

export default controllers;
