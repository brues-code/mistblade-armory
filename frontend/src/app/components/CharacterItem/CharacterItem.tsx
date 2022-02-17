import React, { FC, useMemo } from 'react';

import { CharacterItem as CharacterItemType } from 'types/character-item';
import { getStaticImageUrl } from 'util/get-static-image-url';
import { ImageSize } from 'enums';
import { getEmptySlotIcon } from 'styles/assets/load-asset';

import { useApp } from 'app/context/AppContext';

import { ItemBackground, ItemContainer, ItemInformation } from './styles';

interface Props {
    item: CharacterItemType;
    index: number;
}

const CharItem: FC<Props> = ({ item, index }) => {
    const { loading, errorLoading } = useApp();
    const properlyLoaded = useMemo(() => !loading && !errorLoading, [loading, errorLoading]);
    return (
        <ItemContainer>
            <ItemBackground itemRarity={properlyLoaded ? item.rarity : undefined}>
                <img
                    src={
                        item.icon && item.icon.length > 0 && properlyLoaded
                            ? getStaticImageUrl(ImageSize.large, item.icon)
                            : getEmptySlotIcon(index)
                    }
                    alt={item.name}
                />
            </ItemBackground>
            <ItemInformation>
                <div>{item.name}</div>
                <div>{item.ilevel > 0 && item.ilevel}</div>
            </ItemInformation>
        </ItemContainer>
    );
};

export default CharItem;
