export enum Realm {
  Mistblade = "Mistblade"
}

export enum Endpoints {
  CharSheet = "character-sheet",
  ItemTooltipByGuid = "item-tooltip"
}

export enum Race {
  Human = 1,
  Orc = 2,
  Dwarf = 3,
  NightElf = 4,
  Undead = 5,
  Tauren = 6,
  Gnome = 7,
  Troll = 8,
  Goblin = 9,
  Bloodelf = 10,
  Draenei = 11,
  Worgen = 22,
  Pandaren_Alliance = 25,
  Pandaren_Horde = 26
}

export enum Gender {
  Undefined = -1,
  Male,
  Female
}

export enum Class {
  Undefined = 0,
  Warrior = 1,
  Paladin = 2,
  Hunter = 3,
  Rogue = 4,
  Priest = 5,
  DeathKnight = 6,
  Shaman = 7,
  Mage = 8,
  Warlock = 9,
  Monk = 10,
  Druid = 11
}

export enum ActiveSpec {
  Primary = 1,
  Secondary
}

export enum ItemRarity {
  Poor = 0,
  Common = 1,
  Uncommon = 2,
  Rare = 3,
  Epic = 4,
  Legendary = 5,
  Artifact = 6,
  Heirloom = 7
}

export enum GemColor {
  meta = 1,
  red = 2,
  yellow = 4,
  blue = 8,
  orange = GemColor.red + GemColor.yellow, // 6
  purple = GemColor.red + GemColor.blue, // 10
  green = GemColor.yellow + GemColor.blue, // 12
  prismatic = GemColor.red + GemColor.yellow + GemColor.blue, // 14
  cogwheel = 32
}

export enum ChallengeMap {
  ShadoPanMonastery = 959,
  TempleOfTheJadeSerpent = 960,
  StormstoutBrewery = 961,
  GateOfTheSettingSun = 962,
  MoguShanPalace = 994,
  ScarletHalls = 1001,
  ScarletMonastery = 1004,
  Scholomance = 1007,
  SiegeOfNiuzaoTemple = 1011
}

export enum Faction {
  Undefined = -1,
  Alliance,
  Horde
}
