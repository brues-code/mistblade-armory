import fetchFromTauri from "./base-api";
import { Endpoints } from "../../enums";

interface Params {
  cn: string;
}

interface Payload {}

const getCharSheet = () => {
  return fetchFromTauri<Params, Payload>(Endpoints.CharSheet, {
    cn: "Lowhpspara"
  });
};

export default getCharSheet;
