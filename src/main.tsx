import '@fontsource/source-sans-pro/latin-300.css'
import '@fontsource/source-sans-pro/latin-400.css'
import '@fontsource/source-sans-pro/latin-600.css'
import '@fontsource/source-sans-pro/latin-700.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { store } from './app/store'
import { Provider } from 'react-redux'

import './style.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
)
