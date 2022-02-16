import { Player } from "player";
import { GuildInfo } from "guild-info";

export interface ChallengeMode {
  completiontime?: number;
  completedtime?: number;
  medal?: number;
  playerrank?: number;
  guildrank?: number;
  players?: Player;
  guildinfo?: GuildInfo;
}
