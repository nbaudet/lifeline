import { UndoOutlined } from '@mui/icons-material'
import { ActionCreators } from 'redux-undo'
import IconButton from './base/IconButton'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { hasPastStateSelector } from '../utils/selectors'

export default function Undo() {
    const lifePoints = useSelector((state: RootState) => state.lifePoints)
    const hasPastState = hasPastStateSelector(lifePoints)

    return (
        <IconButton icon={<UndoOutlined />} handleClickActions={[ActionCreators.undo()]} disabled={!hasPastState}>
            Undo
        </IconButton>
    )
}
