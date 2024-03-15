import { UndoOutlined } from '@mui/icons-material'
import { ActionCreators } from 'redux-undo'
import IconButton from './base/IconButton'

export default function Undo() {
    return (
        <IconButton icon={<UndoOutlined />} handleClickAction={ActionCreators.undo()}>
            Undo
        </IconButton>
    )
}
