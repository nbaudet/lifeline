import { RedoOutlined } from '@mui/icons-material'
import { ActionCreators } from 'redux-undo'
import IconButton from './base/IconButton'

export default function Redo() {
    return (
        <IconButton icon={<RedoOutlined />} handleClickAction={ActionCreators.redo()}>
            Redo
        </IconButton>
    )
}
