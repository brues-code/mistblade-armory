import fetchFromTauri from "./base-api";
import { Endpoints, Realm } from "../../enums";

interface Params {
  cn: string;
}

interface Payload {
  realm: Realm;
}

const getCharSheet = () => {
  return fetchFromTauri<Params, Payload>(Endpoints.CharSheet, {
    cn: "Lowhpspara"
  });
};

export default getCharSheet;
