import { Class, ImageSize } from 'enums';
import { BLIZZ_STATIC_IMAGE_URL, ClassStrings, STATIC_IMAGE_URL } from '../app-constants';

export const getStaticImageUrl = (iconSize: ImageSize, icon: string) => {
    return `${STATIC_IMAGE_URL}/${iconSize}/${icon}.png`;
};

export const getBlizzBGUrl = (classId: Class) => {
    return `${BLIZZ_STATIC_IMAGE_URL}/armory_bg_class_${ClassStrings[classId]}.jpg`;
};
