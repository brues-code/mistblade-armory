import React from "react";
import { ThemeProvider } from "styled-components";

import { color } from "styles/theme";
import { OutsideWrapper, MiddleWrapper, InnerContent } from "./styles";

const App = () => (
  <ThemeProvider theme={{ color }}>
    <OutsideWrapper>
      <MiddleWrapper>
        <InnerContent>hi</InnerContent>
      </MiddleWrapper>
    </OutsideWrapper>
  </ThemeProvider>
);

export default App;
