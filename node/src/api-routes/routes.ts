import { Express } from "express";
import controllers from "../controllers/controller";

export const setRoutes = (app: Express) => {
  app.get("/charsheet/:cn", controllers.getCharSheet);
  app.get("/itemtoolbyguid/:i", controllers.getItemTooltipByGuid);
};
