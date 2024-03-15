import { createSlice } from '@reduxjs/toolkit'
import { Settings } from '../../types'

const initialState: Settings = {
    name: '',
    birthDate: '',
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        settingmodified(_state, action) {
            return action.payload
        },
    },
})

export const { settingmodified } = settingsSlice.actions
export default settingsSlice.reducer
