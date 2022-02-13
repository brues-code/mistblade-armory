import fetchFromTauri from "./base-api";
import { Endpoints, Realm } from "../../enums";

interface Params {
  cn: string;
}

interface Payload {
  realm: Realm;
}

const getCharSheet = (name: string) => {
  return fetchFromTauri<Params, Payload>(Endpoints.CharSheet, {
    cn: name
  });
};

export default getCharSheet;
