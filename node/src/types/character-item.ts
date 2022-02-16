import { ItemRarity } from "../../enums";
import { Enchant } from "enchant";
import { Gem } from "gem";

export interface CharacterItem {
  ench: Enchant[];
  entry: number;
  gems: Gem[];
  guid: number;
  icon: string;
  ilevel: number;
  name: string;
  originalicon: string;
  originalname: string;
  rarity: ItemRarity;
  stackcount: number;
}
