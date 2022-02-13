import React from "react";
import { ThemeProvider } from "styled-components";

import AppContextProvider from "app/context/AppContext";

import CharacterSheet from "app/components/CharacterSheet";

import { color } from "styles/theme";
import { OutsideWrapper, MiddleWrapper, InnerContent } from "./styles";

const App = () => (
  <ThemeProvider theme={{ color }}>
    <AppContextProvider>
      <OutsideWrapper>
        <MiddleWrapper>
          <InnerContent>
            <CharacterSheet />
          </InnerContent>
        </MiddleWrapper>
      </OutsideWrapper>
    </AppContextProvider>
  </ThemeProvider>
);

export default App;
