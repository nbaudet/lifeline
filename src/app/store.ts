import { configureStore } from '@reduxjs/toolkit'
import lifePointsReducer from '../features/lifePoints/lifePointsSlice'
import settingsReducer from '../features/settings/settingsSlice'
import undoable from 'redux-undo'

export const store = configureStore({
    reducer: {
        lifePoints: undoable(lifePointsReducer),
        settings: settingsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
