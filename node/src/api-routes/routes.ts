import { Express } from "express";
import controller, { Controllers } from "../controllers/controller";

const routes: Array<{ route: string; controllerFunc: keyof Controllers }> = [
  { route: "/charsheet/:cn", controllerFunc: "getCharSheet" },
  { route: "/itemtoolbyguid/:i", controllerFunc: "getItemTooltipByGuid" }
];

export const setRoutes = (app: Express) =>
  routes.forEach(r => app.get(r.route, controller[r.controllerFunc]));
