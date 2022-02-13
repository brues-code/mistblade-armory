import { Class } from "../../enums";

export const getClassIcon = (classId: Class) => {
  return require("./class/" + classId + ".png");
};
