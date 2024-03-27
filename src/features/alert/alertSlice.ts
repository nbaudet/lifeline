import { AlertColor } from '@mui/material'
import { createSlice } from '@reduxjs/toolkit'

interface Alert {
    severity?: AlertColor
    text?: string
}

const initialState: Alert = {
    severity: undefined,
    text: undefined,
}

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        alertSetted(_state, action) {
            return action.payload
        },
        alertClosed(_state) {
            return initialState
        },
    },
})

export const { alertSetted, alertClosed } = alertSlice.actions
export default alertSlice.reducer
