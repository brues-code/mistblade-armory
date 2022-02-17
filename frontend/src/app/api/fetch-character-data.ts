import fetchFromTauri from './base-api';
import { Endpoints } from 'enums';
import { CharacterSheet } from 'types/character-sheet';

const getCharSheet = (name: string) => fetchFromTauri<CharacterSheet>(Endpoints.CharSheet, name);

export default getCharSheet;
