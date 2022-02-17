import { Class, Race, Gender } from 'enums';
import { SlotIcons } from 'app-constants';

export const getCharacterIcon = (raceId: Race, genderId: Gender) => require(`./race/${raceId}_${genderId}.jpg`);

export const getClassIcon = (classId: Class) => require(`./class/${classId}.png`);

export const getEmptySlotIcon = (slotIndex: number) => require(`./slot/UI-PaperDoll-Slot-${SlotIcons[slotIndex]}.png`);
