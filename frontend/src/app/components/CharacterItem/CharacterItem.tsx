import React, { FC } from "react";

import { CharacterItem as CharacterItemType } from "types/character-item";
import { getStaticImageUrl } from "util/get-static-image-url";
import { ImageSize } from "enums";
import { getEmptySlotIcon } from "styles/assets/load-asset";

import { useApp } from "app/context/AppContext";

import { ItemBackground, ItemContainer } from "./styles";

interface Props {
  item: CharacterItemType;
  index: number;
}

const CharItem: FC<Props> = ({ item, index }) => {
  const { loading } = useApp();
  return (
    <ItemContainer>
      <ItemBackground itemRarity={loading ? undefined : item.rarity}>
        <img
          src={
            item.icon && item.icon.length > 0 && !loading
              ? getStaticImageUrl(ImageSize.large, item.icon)
              : getEmptySlotIcon(index)
          }
          alt={item.name}
        />
      </ItemBackground>
    </ItemContainer>
  );
};

export default CharItem;
