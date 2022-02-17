import { CharacterData } from './character-data';

export interface Player {
    specializationid: number;
    specializationrole: number;
    specializationname: string;
    specializationicon: string;
    playerinfo: CharacterData[];
}
