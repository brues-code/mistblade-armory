import React, { FC, useMemo } from 'react';

import { CharacterItem as CharacterItemType } from 'types/character-item';
import { getStaticImageUrl } from 'util/get-static-image-url';
import { ImageSize } from 'enums';
import { AlignmentIndex } from 'app-constants';
import { getEmptySlotIcon } from 'styles/assets/load-asset';

import { useApp } from 'app/context/AppContext';

import { ItemBackground, ItemContainer, ItemInformation } from './styles';

interface Props {
    item: CharacterItemType;
    index: number;
}

const CharItem: FC<Props> = ({ item, index }) => {
    const { loading, errorLoading } = useApp();
    const isLeftAligned = useMemo(() => AlignmentIndex.leftAligned.includes(index), [index]);

    const properlyLoaded = useMemo(() => !loading && !errorLoading, [loading, errorLoading]);

    const renderItemInformation = useMemo(
        () =>
            properlyLoaded && (
                <ItemInformation isLeftAligned={isLeftAligned}>
                    <div>{item.name}</div>
                    <div>{item.ilevel > 0 && item.ilevel}</div>
                </ItemInformation>
            ),
        [item.name, item.ilevel, properlyLoaded, isLeftAligned]
    );

    return (
        <ItemContainer isLeftAligned={isLeftAligned}>
            {!isLeftAligned && renderItemInformation}
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
            {isLeftAligned && renderItemInformation}
        </ItemContainer>
    );
};

export default CharItem;
