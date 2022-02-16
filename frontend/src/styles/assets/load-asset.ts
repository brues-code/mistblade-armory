import { Class, Race, Gender } from "enums";

export const getCharacterIcon = (raceId: Race, genderId: Gender) => {
    return require(`./race/${raceId}_${genderId}.jpg`);
};

export const getClassIcon = (classId: Class) => {
    return require("./class/" + classId + ".png");
};
