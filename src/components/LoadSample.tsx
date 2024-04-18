import IconButton from './base/IconButton'
import sampleState from '../assets/sampleState.json'
import { lifePointsSetted } from '../features/lifePoints/lifePointsSlice'
import { settingModified } from '../features/settings/settingsSlice'
import { UnknownAction } from '@reduxjs/toolkit'
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

export default function LoadSample() {
    const setSampleState = () => {
        const { settings, lifePoints } = sampleState
        return [lifePointsSetted(lifePoints), settingModified(settings)] as UnknownAction[]
    }

    return (
        <IconButton icon={<VideogameAssetIcon />} handleClickActions={setSampleState()}>
            Play around
        </IconButton>
    )
}
