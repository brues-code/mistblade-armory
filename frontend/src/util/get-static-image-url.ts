import { ImageSize } from "enums";
import { STATIC_IMAGE_URL } from "../app-constants";

export const getStaticImageUrl = (iconSize: ImageSize, icon: string) => {
  return `${STATIC_IMAGE_URL}/${iconSize}/${icon}.png`;
};
