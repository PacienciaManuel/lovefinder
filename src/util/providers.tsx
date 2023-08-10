'use client';

import 'dayjs/locale/pt-br';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useEffect, useMemo } from 'react';
import { selectDark, setDark } from '@/redux/themeSlicer';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { CssBaseline, useMediaQuery } from "@mui/material";
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { ConfigProvider, ThemeConfig as ThemeConfigAnt, theme  } from 'antd';
import { createCache, StyleProvider as StyleProviderAnt } from '@ant-design/cssinjs';
import { colors, createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material";

export default function Providers({ children, checkDarkMode }:{children: React.ReactNode, checkDarkMode?: boolean}) {
    const dispatch = useAppDispatch();
    const dark = useAppSelector(selectDark);
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    
    // Configuração de tema do Material UI
    const themeMui = useMemo(() => createTheme({
            palette: {
                mode: dark ? 'dark' : 'light',
                secondary: {
                    main: colors.pink[400],
                    light: colors.pink[200],
                    dark: colors.pink[800],
                }
            },
            components: {
                MuiTypography: {
                    defaultProps: {
                        color: dark ? 'white' : 'gray',
                    }
                }
            }
        }),
        [dark],
    );

    // Cache do Ant Design
    const cacheAnt = createCache();

    // Configuração de tema do Ant Design
    const themeAnt:ThemeConfigAnt = useMemo(() => ({
            algorithm: dark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }),
        [dark],
    );
    
    // Configuração de tema do Mantine
    const themeMantine:MantineThemeOverride = useMemo(() => ({
            colorScheme: dark ? 'dark' : 'light',
            fontFamily: themeMui.typography.fontFamily,
        }),
        [dark],
    );

    // Configurando o modo de tema do sistema operacional
    useEffect(() => {
        if (checkDarkMode) {
            dispatch(setDark(prefersDarkMode === true));
        }
    }, []);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'pt-br'} >
            <CssBaseline />
            <MantineProvider theme={themeMantine} withGlobalStyles>
                <MUIThemeProvider theme={themeMui} >
                    <StyleProviderAnt cache={cacheAnt}>
                        <ConfigProvider theme={themeAnt} >
                            {children}
                        </ConfigProvider>
                    </StyleProviderAnt>
                </MUIThemeProvider>
            </MantineProvider>
        </LocalizationProvider>
    )
}
