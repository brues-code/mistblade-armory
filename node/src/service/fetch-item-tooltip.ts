import fetchFromTauri from "./base-api";
import { Endpoints, Realm } from "../../enums";

export interface Params {
  i: Array<number>;
}

interface Payload {
  realm: Realm;
}

export const getItemTooltipByGuid = (items: Array<number>) => {
  return fetchFromTauri<Params, Payload>(Endpoints.ItemTooltipByGuid, {
    i: items
  });
};

