import fetchFromTauri from "./base-api";
import { Endpoints } from "../../enums";
import { CharacterSheet } from "character-sheet";

export interface Params {
  cn: string;
}

const getCharSheet = (name: string) => {
  console.log("getCharSheet: " + name);
  return fetchFromTauri<Params, CharacterSheet>(Endpoints.CharSheet, {
    cn: name
  }).catch(err => {
    console.error(name + ": " + err.errorstring);
    throw err;
  });
};

export default getCharSheet;
