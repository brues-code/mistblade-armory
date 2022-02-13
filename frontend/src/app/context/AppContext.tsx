import React, {
  createContext,
  FC,
  useContext,
  useState,
  useMemo,
  useCallback
} from "react";
import { CharacterSheet } from "types/character-sheet";

import getCharSheet from "app/api/fetch-character-data";
import { GemColor } from "enums";

interface State {
  character?: CharacterSheet;
}

interface ApiProps {
  loadCharacterByName: (name: string) => void;
}

type AppState = State & ApiProps;

const initialState: AppState = {
  character: undefined,
  loadCharacterByName: () => null
};

export const AppContext = createContext(initialState);

const AppContextProvider: FC = ({ children }) => {
  const [character, setCharacter] = useState<CharacterSheet>();

  const loadCharacterByName = useCallback((name: string) => {
    getCharSheet(name)
      .then(setCharacter)
      .catch(console.log);
  }, []);

  const contextState: AppState = useMemo(
    () => ({ character, loadCharacterByName }),
    [loadCharacterByName, character]
  );

  return (
    <AppContext.Provider value={contextState}>{children}</AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

export default AppContextProvider;
