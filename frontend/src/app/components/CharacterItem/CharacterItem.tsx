import React, { FC } from "react";

import { CharacterItem as CharacterItemType } from "types/character-item";
import { getStaticImageUrl } from "util/get-static-image-url";
import { ImageSize } from "enums";

import { ItemContainer } from "./styles";
import { getEmptySlotIcon } from "../../../styles/assets/load-asset";

interface Props {
  item: CharacterItemType;
  index: number;
}

const CharItem: FC<Props> = ({ item, index }) => {
  return (
    <ItemContainer>
      <img
        src={
          item.icon && item.icon.length > 0
            ? getStaticImageUrl(ImageSize.large, item.icon)
            : getEmptySlotIcon(index)
        }
        alt={item.name}
      />
    </ItemContainer>
  );
};

export default CharItem;
