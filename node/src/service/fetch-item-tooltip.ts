import fetchFromTauri from "./base-api";
import { Endpoints, Realm } from "../../enums";

export interface Params {
  i: number;
}

interface Payload {
  realm: Realm;
}

export const getItemTooltipByGuid = (item: Params["i"]) => {
  console.log("getItemTooltipByGuid: " + item);
  return fetchFromTauri<Params, Payload>(Endpoints.ItemTooltipByGuid, {
    i: item
  });
};
