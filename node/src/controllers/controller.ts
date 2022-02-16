import { Request, Response } from "express";
import getCharSheet, {
  Params as GetCharSheetParams
} from "../service/fetch-character-data";
import {
  getItemTooltipByGuid,
  Params as GetItemTooltipByGuidParams
} from "../service/fetch-item-tooltip";

const controllers = {
  getCharSheet: (req: Request, res: Response) => {
    const params = (req.params as unknown) as GetCharSheetParams;
    getCharSheet(params.cn).then(r => {
      res.json(r);
    });
  },
  getItemTooltipByGuid: (req: Request, res: Response) => {
    const params = (req.params as unknown) as GetItemTooltipByGuidParams;
    getItemTooltipByGuid(params.i).then(r => {
      res.json(r);
    });
  }
};

export default controllers;
