import { Class, Faction, Gender, Race } from "../../enums";

export interface CharacterData {
  charname: string;
  race: Race;
  class: Class;
  gender: Gender;
  guildname: string;
  level: number;
  faction: Faction;
}
