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

interface State {
  character?: CharacterSheet;
}

interface ApiProps {
  loadCharacterByName: (name: string) => void;
  clearCharacter: () => void;
}

type AppState = State & ApiProps;

const initialState: AppState = {
  character: undefined,
  loadCharacterByName: () => null,
  clearCharacter: () => null
};

export const AppContext = createContext(initialState);

const AppContextProvider: FC = ({ children }) => {
  const [character, setCharacter] = useState<CharacterSheet>();

  const loadCharacterByName = useCallback((name: string) => {
    getCharSheet(name)
      .then(setCharacter)
      .catch(console.log);
  }, []);

  const clearCharacter = useCallback(() => setCharacter(undefined), []);

  const contextState: AppState = useMemo(
    () => ({ character, loadCharacterByName, clearCharacter }),
    [loadCharacterByName, character, clearCharacter]
  );

  return (
    <AppContext.Provider value={contextState}>{children}</AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

export default AppContextProvider;
