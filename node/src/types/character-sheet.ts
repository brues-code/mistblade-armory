import { Class, Gender, Race } from "../../enums";
import { CharacterItem } from "character-item";
import { Skindata } from "skindata";
import { PrimaryTradeSkill } from "primary-trade-skill";
import { ChallengeMode } from "challenge-mode";
import { CharacterStat } from "character-stat";

interface ChallengeModes {
  [key: number]: ChallengeMode;
}

export interface CharacterSheet {
  avgitemlevel: number;
  class: Class;
  faction_string_class: string;
  gender: Gender;
  guid: number;
  guildName: string;
  level: number;
  name: string;
  playerHonorKills: number;
  pts: number;
  race: Race;
  title: string;
  tname: string;
  characterItems: CharacterItem[];
  skindata: Skindata;
  challengemode: ChallengeModes;
  healthValue: number;
  primary_trade_skill_1: PrimaryTradeSkill;
  primary_trade_skill_2: PrimaryTradeSkill;
  characterStat: CharacterStat;
  treeName_0?: string;
  treeIcon_0?: string;
  talents_0: string;
  treeName_1?: string;
  treeIcon_1?: string;
  talents_1: string;
}
