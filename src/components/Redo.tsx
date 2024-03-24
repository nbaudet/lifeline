import { RedoOutlined } from '@mui/icons-material'
import { ActionCreators } from 'redux-undo'
import IconButton from './base/IconButton'
import { hasFutureStateSelector } from '../utils/selectors'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

export default function Redo() {
    const lifePoints = useSelector((state: RootState) => state.lifePoints)
    const hasFutureState = hasFutureStateSelector(lifePoints)

    return (
        <IconButton icon={<RedoOutlined />} handleClickAction={ActionCreators.redo()} disabled={!hasFutureState}>
            Redo
        </IconButton>
    )
}
