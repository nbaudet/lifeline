import { createSlice } from '@reduxjs/toolkit'
import { LifePoint, LifePoints } from '../../types'

const initialState: LifePoints = []

const compare = (a: LifePoint, b: LifePoint) => {
    return a.date!.toString().localeCompare(b.date!.toString())
}

const lifePointsSlice = createSlice({
    name: 'lifePoints',
    initialState,
    reducers: {
        lifePointAdded(state, action) {
            state.push(action.payload)
            state.sort(compare)
        },
        lifePointModified(state, action) {
            const index = state.findIndex((lifePoint) => lifePoint.id === action.payload.id)
            state[index] = action.payload
            state.sort(compare)
        },
        lifePointDeleted(state, action) {
            state.splice(
                state.findIndex((lifePoint) => lifePoint.id === action.payload.id),
                1
            )
        },
        lifePointsSetted(_state, action) {
            return action.payload
        },
    },
})

export const { lifePointAdded, lifePointModified, lifePointDeleted, lifePointsSetted } = lifePointsSlice.actions
export default lifePointsSlice.reducer
