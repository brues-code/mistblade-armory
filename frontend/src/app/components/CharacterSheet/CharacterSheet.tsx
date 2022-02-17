import React, { FC, useCallback, useState, KeyboardEvent, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Oval as LoadingWheel } from 'react-loader-spinner';

import { ImageSize } from 'enums';
import { getStaticImageUrl } from 'util/get-static-image-url';
import { getCharacterRoute } from 'util/get-route';
import { getCharacterIcon, getClassIcon } from 'styles/assets/load-asset';
import { CharacterItem as CharacterItemType } from 'types/character-item';

import { useApp } from 'app/context/AppContext';
import CharacterItem from 'app/components/CharacterItem';
import Icon from 'app/components/Icon';

import { Button, CharImage, Input, InputContainer, SheetBody, SheetFooter, SheetRow, SheetWrapper } from './styles';
import { color } from '../../../styles/theme';

interface SlotProps {
    item: CharacterItemType;
    index: number;
}

const CharSheet: FC = () => {
    const { name: paramName } = useParams<{ name: string }>();
    const navigate = useNavigate();
    const { loadCharacterByName, character, clearCharacter, loading, errorLoading } = useApp();
    const [charName, setCharName] = useState(paramName || '');

    useEffect(() => {
        paramName ? loadCharacterByName(paramName) : clearCharacter();
    }, [loadCharacterByName, paramName, clearCharacter]);

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

    const { leftItems, rightItems, bottomItems } = useMemo(() => {
        let leftArray: Array<SlotProps> = [];
        let rightArray: Array<SlotProps> = [];
        let bottomArray: Array<SlotProps> = [];

        if (character) {
            character.characterItems.forEach((item, index) => {
                if (index < 8) {
                    leftArray.push({ item, index });
                } else if (index < 16) {
                    rightArray.push({ item, index });
                } else if (index < 18) {
                    bottomArray.push({ item, index });
                }
            });
        }
        return {
            leftItems: leftArray,
            rightItems: rightArray,
            bottomItems: bottomArray
        };
    }, [character]);

    const renderItem = useCallback(({ index, item }: SlotProps) => {
        return <CharacterItem key={item.guid !== 0 ? item.guid : index} item={item} index={index} />;
    }, []);

    const renderTalentIcons = useMemo(() => {
        if (!character) {
            return undefined;
        }
        return [0, 1].map(icon => {
            const treeIcon = character[`treeIcon_${icon}`];
            return (
                treeIcon && (
                    <CharImage src={getStaticImageUrl(ImageSize.large, treeIcon)} alt={character[`treeName_${icon}`]} />
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
                <Input value={charName} onChange={e => setCharName(e.target.value)} onKeyDown={handleKeyDown} />
                <Button onClick={loadChar}>Load char</Button>
                <Icon name="icon_proofs" fill="#acb4bf" />
            </InputContainer>
            <SheetBody>
                <SheetRow>{leftItems.map(renderItem)}</SheetRow>
                {renderCharDetails}
                <SheetRow>{rightItems.map(renderItem)}</SheetRow>
            </SheetBody>
            <SheetFooter>{bottomItems.map(renderItem)}</SheetFooter>
        </SheetWrapper>
    );
};

export default CharSheet;
