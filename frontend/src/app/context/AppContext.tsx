import React, { createContext, FC, useContext } from "react";

import getCharSheet from "app/api/fetch-character-data";

interface State {}

const initialState: State = {};

export const AppContext = createContext(initialState);

const AppContextProvider: FC = ({ children }) => {
  const contextState: State = {};

  console.log(getCharSheet());

  return (
    <AppContext.Provider value={contextState}>{children}</AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

export default AppContextProvider;
