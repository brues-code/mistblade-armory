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
  loading: boolean;
}

interface ApiProps {
  loadCharacterByName: (name: string) => void;
  clearCharacter: () => void;
}

type AppState = State & ApiProps;

const initialState: AppState = {
  character: undefined,
  loadCharacterByName: () => null,
  clearCharacter: () => null,
  loading: false
};

export const AppContext = createContext(initialState);

const AppContextProvider: FC = ({ children }) => {
  const [character, setCharacter] = useState<CharacterSheet>();
  const [loading, setLoading] = useState(false);

  const loadCharacterByName = useCallback((name: string) => {
    setLoading(true);
    getCharSheet(name)
      .then(setCharacter)
      .then(() => setLoading(false))
      .catch(console.log);
  }, []);

  const clearCharacter = useCallback(() => setCharacter(undefined), []);

  const contextState: AppState = useMemo(
    () => ({ character, loadCharacterByName, clearCharacter, loading }),
    [loadCharacterByName, character, clearCharacter, loading]
  );

  return (
    <AppContext.Provider value={contextState}>{children}</AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

export default AppContextProvider;
