import React, { FC, useCallback, useState } from "react";

import { useApp } from "app/context/AppContext";

import { Input, Button } from "./styles";

const CharSheet: FC = () => {
  const { loadCharacterByName, character } = useApp();
  const [charName, setCharName] = useState("");

  const loadChar = useCallback(() => {
    loadCharacterByName(charName);
  }, [charName]);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Input value={charName} onChange={e => setCharName(e.target.value)} />
        <Button onClick={loadChar}>Load character</Button>
      </div>
      {character && <div>{character.tname}</div>}
    </div>
  );
};

export default CharSheet;
