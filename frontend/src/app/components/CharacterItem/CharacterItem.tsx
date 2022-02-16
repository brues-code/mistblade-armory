import React, { FC } from "react";

import { CharacterItem as CharacterItemType } from "types/character-item";
import { getStaticImageUrl } from "util/get-static-image-url";
import { ImageSize } from "enums";

interface Props {
  item: CharacterItemType;
}

const CharItem: FC<Props> = ({ item }) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <img
        src={getStaticImageUrl(ImageSize.medium, item.icon)}
        alt={item.name}
      />
    </div>
  );
};

export default CharItem;
