import React, { FC, useCallback, useState, KeyboardEvent } from "react";

import { getStaticImageUrl } from "util/get-static-image-url";

import { useApp } from "app/context/AppContext";

import { Button, Input } from "./styles";
import { ImageSize } from "enums";

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
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Input
          value={charName}
          onChange={e => setCharName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={loadChar}>Load character</Button>
      </div>
      {character && (
        <>
          <div style={{ width: "100%", textAlign: "center" }}>
            {character.tname.length > 0 ? character.tname : character.name}
          </div>
          <div style={{ width: "100%", textAlign: "center" }}>
            {`Item Level: ${character.avgitemlevel}`}
          </div>
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
        </>
      )}
    </div>
  );
};

export default CharSheet;
