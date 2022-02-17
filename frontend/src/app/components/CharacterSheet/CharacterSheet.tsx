import React, {
  FC,
  useCallback,
  useState,
  KeyboardEvent,
  useEffect,
  useMemo
} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Oval as LoadingWheel } from "react-loader-spinner";

import { ImageSize } from "enums";
import { getStaticImageUrl } from "util/get-static-image-url";
import { getCharacterRoute } from "util/get-route";
import { getCharacterIcon, getClassIcon } from "styles/assets/load-asset";
import { CharacterItem as CharacterItemType } from "types/character-item";

import { useApp } from "app/context/AppContext";
import CharacterItem from "../CharacterItem";

import {
  Button,
  Input,
  InputContainer,
  SheetWrapper,
  SheetRow
} from "./styles";

interface SlotProps {
  item: CharacterItemType;
  index: number;
}

const CharSheet: FC = () => {
  const { name: paramName } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const {
    loadCharacterByName,
    character,
    clearCharacter,
    loading,
    errorLoading
  } = useApp();
  const [charName, setCharName] = useState(paramName || "");

  useEffect(() => {
    paramName ? loadCharacterByName(paramName) : clearCharacter();
  }, [loadCharacterByName, paramName, clearCharacter]);

  const loadChar = useCallback(() => {
    navigate(getCharacterRoute(charName));
  }, [charName, navigate]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
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
    return (
      <CharacterItem
        key={item.guid !== 0 ? item.guid : index}
        item={item}
        index={index}
      />
    );
  }, []);

  const renderCharDetails = useCallback(
    () =>
      loading ? (
        <LoadingWheel height="100" width="100" />
      ) : errorLoading ? (
        <SheetRow>Unable to load character</SheetRow>
      ) : (
        character && (
          <SheetRow>
            <SheetRow>
              <img
                width={36}
                height={36}
                src={getCharacterIcon(character.race, character.gender)}
                alt={character.treeName_0}
                style={{ paddingRight: "8px" }}
              />
              <img
                width={36}
                height={36}
                src={getClassIcon(character.class)}
                alt={character.treeName_0}
              />
            </SheetRow>
            <SheetRow>
              {character.tname.length > 0 ? character.tname : character.name}
            </SheetRow>
            <SheetRow>{`Level: ${character.level}`}</SheetRow>
            <SheetRow>{`Item Level: ${character.avgitemlevel}`}</SheetRow>
            <SheetRow>
              {character.treeIcon_0 && (
                <img
                  src={getStaticImageUrl(
                    ImageSize.medium,
                    character.treeIcon_0
                  )}
                  alt={character.treeName_0}
                  style={{ paddingRight: "8px" }}
                />
              )}
              {character.treeIcon_1 && (
                <img
                  src={getStaticImageUrl(
                    ImageSize.medium,
                    character.treeIcon_1
                  )}
                  alt={character.treeName_1}
                />
              )}
            </SheetRow>
          </SheetRow>
        )
      ),
    [character, loading]
  );

  return (
    <SheetWrapper>
      <InputContainer>
        <Input
          value={charName}
          onChange={e => setCharName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={loadChar}>Load character</Button>
      </InputContainer>
      <div style={{ display: "flex", paddingBottom: "8px", width: "512px" }}>
        <SheetRow>{leftItems.map(renderItem)}</SheetRow>
        {renderCharDetails()}
        <SheetRow>{rightItems.map(renderItem)}</SheetRow>
      </div>
      <SheetRow style={{ display: "flex", justifyContent: "center" }}>
        {bottomItems.map(renderItem)}
      </SheetRow>
    </SheetWrapper>
  );
};

export default CharSheet;
