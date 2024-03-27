import { createSlice } from '@reduxjs/toolkit'
import { Settings } from '../../types'

const initialState: Settings = {
    name: '',
    birthDate: null,
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        settingModified(_state, action) {
            return action.payload
        },
    },
})

export const { settingModified } = settingsSlice.actions
export default settingsSlice.reducer
