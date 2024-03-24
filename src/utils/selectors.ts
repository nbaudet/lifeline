import { createSelector } from '@reduxjs/toolkit'
import { LifePoints, Settings } from '../types'
import { StateWithHistory } from 'redux-undo'

export const isReadySelector = createSelector([(settings: Settings) => settings], (settings) => {
    return settings.name !== '' && settings.birthDate !== ''
})

export const hasLifePointSelector = createSelector(
    [(lifePoints: StateWithHistory<LifePoints>) => lifePoints],
    (lifePoints) => {
        return lifePoints.present?.length
    }
)

export const hasFutureStateSelector = createSelector(
    [(lifePoints: StateWithHistory<LifePoints>) => lifePoints],
    (lifePoints) => {
        return lifePoints.future?.length
    }
)

export const hasPastStateSelector = createSelector(
    [(lifePoints: StateWithHistory<LifePoints>) => lifePoints],
    (lifePoints) => {
        return lifePoints.past?.length
    }
)

export const canDownloadFileSelector = createSelector(
    [(lifePoints: StateWithHistory<LifePoints>) => lifePoints],
    (lifePoints) => {
        return lifePoints.past?.length && lifePoints.past[lifePoints.past.length - 1].length !== 0
    }
)
