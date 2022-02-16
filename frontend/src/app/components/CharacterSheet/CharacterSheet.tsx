import React, { FC, useCallback, useState, KeyboardEvent } from "react";

import { ImageSize } from "enums";
import { getStaticImageUrl } from "util/get-static-image-url";
import { getCharacterIcon, getClassIcon } from "styles/assets/load-asset";

import { useApp } from "app/context/AppContext";
import CharacterItem from "../CharacterItem";

import {
  Button,
  Input,
  InputContainer,
  SheetWrapper,
  SheetRow
} from "./styles";

const CharSheet: FC = () => {
  const { loadCharacterByName, character } = useApp();
  const [charName, setCharName] = useState("");

  const loadChar = useCallback(() => {
    loadCharacterByName(charName);
  }, [charName, loadCharacterByName]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        loadChar();
      }
    },
    [loadChar]
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
      {character && (
        <>
          <SheetRow>
            <img
              width={36}
              height={36}
              src={getCharacterIcon(character.race, character.gender)}
              alt={character.treeName_0}
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
          <SheetRow>{`Item Level: ${character.avgitemlevel}`}</SheetRow>
          <SheetRow>
            {character.treeIcon_0 && (
              <img
                src={getStaticImageUrl(ImageSize.medium, character.treeIcon_0)}
                alt={character.treeName_0}
              />
            )}
            {character.treeIcon_1 && (
              <img
                src={getStaticImageUrl(ImageSize.medium, character.treeIcon_1)}
                alt={character.treeName_1}
              />
            )}
          </SheetRow>
          {character.characterItems.map(
            i => i.guid !== 0 && <CharacterItem item={i} key={i.guid} />
          )}
        </>
      )}
    </SheetWrapper>
  );
};

export default CharSheet;
