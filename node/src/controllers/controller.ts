import { Request, Response } from "express";
import getCharSheet, {
  Params as GetCharSheetParams
} from "../service/fetch-character-data";
import {
  getItemTooltipByGuid,
  Params as GetItemTooltipByGuidParams
} from "../service/fetch-item-tooltip";

type ExpressRoute = (req: Request, res: Response) => void;

export interface Controllers {
  getCharSheet: ExpressRoute;
  getItemTooltipByGuid: ExpressRoute;
}

const controller: Controllers = {
  getCharSheet: (req: Request, res: Response) => {
    const params = (req.params as unknown) as GetCharSheetParams;
    getCharSheet(params.cn)
      .then(r => {
        res.json(r);
      })
      .catch(() => res.sendStatus(404));
  },
  getItemTooltipByGuid: (req: Request, res: Response) => {
    const params = (req.params as unknown) as GetItemTooltipByGuidParams;
    getItemTooltipByGuid(params.i).then(r => {
      res.json(r);
    });
  }
};

export default controller;
