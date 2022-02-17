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
  errorLoading: boolean;
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
  loading: false,
  errorLoading: false
};

export const AppContext = createContext(initialState);

const AppContextProvider: FC = ({ children }) => {
  const [character, setCharacter] = useState<CharacterSheet>();
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);

  const loadCharacterByName = useCallback((name: string) => {
    setLoading(true);
    setErrorLoading(false);
    getCharSheet(name)
      .then(setCharacter)
      .catch(err => {
        console.error(err);
        setErrorLoading(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const clearCharacter = useCallback(() => setCharacter(undefined), []);

  const contextState: AppState = useMemo(
    () => ({
      character,
      loadCharacterByName,
      clearCharacter,
      loading,
      errorLoading
    }),
    [loadCharacterByName, character, clearCharacter, loading, errorLoading]
  );

  return (
    <AppContext.Provider value={contextState}>{children}</AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

export default AppContextProvider;
