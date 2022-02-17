import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppContextProvider from 'app/context/AppContext';

import CharacterSheet from 'app/components/CharacterSheet';

import { color } from 'styles/theme';
import { OutsideWrapper, MiddleWrapper, InnerContent } from './styles';

const Routes = () => {
    const charSheetRoutes = ['/', '/:name'].map(path => ({
        path,
        element: <CharacterSheet />
    }));
    const routes = [...charSheetRoutes];

    return useRoutes(routes);
};

const App = () => {
    return (
        <ThemeProvider theme={{ color }}>
            <AppContextProvider>
                <OutsideWrapper>
                    <MiddleWrapper>
                        <InnerContent>{Routes()}</InnerContent>
                    </MiddleWrapper>
                </OutsideWrapper>
            </AppContextProvider>
        </ThemeProvider>
    );
};

export default App;
