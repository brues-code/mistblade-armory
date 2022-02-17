import { color } from 'styles/theme';
import { ItemSlot } from 'enums';
import { ReactNode } from 'react';

export const STATIC_IMAGE_URL = 'http://mop-static.tauri.hu/images/icons';

export const SlotIcons = [
    'Head',
    'Neck',
    'Shoulder',
    'Chest',
    'Chest',
    'Shirt',
    'Tabard',
    'Wrists',
    'Hands',
    'Waist',
    'Legs',
    'Feet',
    'Finger',
    'Finger',
    'Trinket',
    'Trinket',
    'MainHand',
    'SecondaryHand'
    // "Relic"
];

export const ItemColors = [
    color.$Poor,
    color.$Common,
    color.$Uncommon,
    color.$Rare,
    color.$Epic,
    color.$Legendary,
    color.$Artifact,
    color.$Heirloom
];

export const ItemInventoryArrangement = {
    leftItems: [
        ItemSlot.Head,
        ItemSlot.Neck,
        ItemSlot.Shoulder,
        ItemSlot.Back,
        ItemSlot.Chest,
        ItemSlot.Shirt,
        ItemSlot.Tabard,
        ItemSlot.Wrists
    ],
    rightItems: [
        ItemSlot.Hands,
        ItemSlot.Waist,
        ItemSlot.Legs,
        ItemSlot.Feet,
        ItemSlot.Finger1,
        ItemSlot.Finger2,
        ItemSlot.Trinket1,
        ItemSlot.Trinket2
    ],
    bottomItems: [ItemSlot.MainHand, ItemSlot.SecondaryHand]
};
