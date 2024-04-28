// @see: https://zenoo.github.io/mui-theme-creator/

import { createTheme } from '@mui/material'
import { ThemeOptions } from '@mui/material/styles'

const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#01579b',
        },
        secondary: {
            main: '#9c27b0',
        },
        background: {
            default: '#f5f5f5',
            paper: '#ffffff',
        },
        text: {
            primary: '#616161',
            secondary: '#455a64',
        },
    },
    typography: {
        fontFamily: 'Source Sans Pro',
        fontWeightMedium: 600,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '.screen-only': {
                    '@media print': {
                        display: 'none !important',
                    },
                },
                '.print-only': {
                    display: 'none',
                    '@media print': {
                        display: 'block',
                    },
                },
            },
        },
    },
}

const theme = createTheme(themeOptions)

export default theme
