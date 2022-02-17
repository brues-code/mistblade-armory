import React, { FC, useCallback, useState, KeyboardEvent, useEffect, useMemo, ReactNode } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Oval as LoadingWheel } from 'react-loader-spinner';

import { ImageSize, ItemSlot } from 'enums';
import { getStaticImageUrl } from 'util/get-static-image-url';
import { getCharacterRoute } from 'util/get-route';
import { getCharacterIcon, getClassIcon } from 'styles/assets/load-asset';
import { CharacterItem as CharacterItemType } from 'types/character-item';

import { useApp } from 'app/context/AppContext';
import CharacterItem from 'app/components/CharacterItem';
import Icon from 'app/components/Icon';

import { color } from 'styles/theme';
import { Button, CharImage, Input, InputContainer, SheetBody, SheetFooter, SheetRow, SheetWrapper } from './styles';
import { ItemInventoryArrangement } from 'app-constants';

interface SlotProps {
    item: CharacterItemType;
    index: number;
}

interface InventoryArrangementProps {
    leftItems: ReactNode[];
    rightItems: ReactNode[];
    bottomItems: ReactNode[];
}

const CharSheet: FC = () => {
    const { name: paramName } = useParams<{ name: string }>();
    const navigate = useNavigate();
    const { loadCharacterByName, character, clearCharacter, loading, errorLoading } = useApp();
    const [charName, setCharName] = useState(paramName || '');

    useEffect(() => {
        paramName ? loadCharacterByName(paramName) : clearCharacter();
    }, [loadCharacterByName, paramName, clearCharacter]);

    useEffect(() => {
        if (character?.name) {
            setCharName(character?.name);
        }
    }, [character?.name]);

    const loadChar = useCallback(() => {
        navigate(getCharacterRoute(charName));
    }, [charName, navigate]);

    const handleKeyDown = useCallback(
        (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                loadChar();
            }
        },
        [loadChar]
    );

    const renderItem = useCallback(
        ({ index, item }: SlotProps) => (
            <CharacterItem key={item.guid !== 0 ? item.guid : index} item={item} index={index} />
        ),
        []
    );

    const itemArrays = useMemo(() => {
        const arrangements: InventoryArrangementProps = {
            leftItems: [],
            rightItems: [],
            bottomItems: []
        };

        if (character) {
            Object.keys(arrangements).forEach(key => {
                ItemInventoryArrangement[key].forEach((index: ItemSlot) => {
                    const item = character.characterItems[index];
                    arrangements[key].push(renderItem({ item, index }));
                });
            });
        }

        return arrangements;
    }, [character, renderItem]);

    const renderTalentIcons = useMemo(() => {
        if (!character) {
            return undefined;
        }
        return [0, 1].map(icon => {
            const treeIcon = character[`treeIcon_${icon}`];
            return (
                treeIcon && (
                    <CharImage
                        key={treeIcon}
                        src={getStaticImageUrl(ImageSize.large, treeIcon)}
                        alt={character[`treeName_${icon}`]}
                    />
                )
            );
        });
    }, [character]);

    const renderCharDetails = useMemo(
        () =>
            loading ? (
                <LoadingWheel height="100" width="100" />
            ) : errorLoading ? (
                <SheetRow>Unable to load {charName}</SheetRow>
            ) : (
                character && (
                    <SheetRow>
                        <SheetRow>
                            <CharImage
                                src={getCharacterIcon(character.race, character.gender)}
                                alt={String(character.race)}
                            />
                            <CharImage src={getClassIcon(character.class)} alt={String(character.class)} />
                        </SheetRow>
                        <SheetRow>{character.tname.length > 0 ? character.tname : character.name}</SheetRow>
                        <SheetRow>{`<${character.guildName}>`}</SheetRow>
                        <SheetRow>{`Level: ${character.level}`}</SheetRow>
                        <SheetRow>{`Item Level: ${character.avgitemlevel}`}</SheetRow>
                        <SheetRow>{renderTalentIcons}</SheetRow>
                    </SheetRow>
                )
            ),
        [character, loading, errorLoading, charName, renderTalentIcons]
    );

    return (
        <SheetWrapper>
            <InputContainer>
                <Input
                    value={charName}
                    onChange={e => setCharName(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={'Enter name'}
                />
                <Button onClick={loadChar}>
                    <Icon name="icon_search" fill={color.$Navy_l2} />
                </Button>
            </InputContainer>
            <SheetBody>
                <SheetRow>{itemArrays.leftItems}</SheetRow>
                {renderCharDetails}
                <SheetRow>{itemArrays.rightItems}</SheetRow>
            </SheetBody>
            <SheetFooter>{itemArrays.bottomItems}</SheetFooter>
        </SheetWrapper>
    );
};

export default CharSheet;
