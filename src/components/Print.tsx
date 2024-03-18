import { PrintOutlined } from '@mui/icons-material'
import IconButton from './base/IconButton'

export default function Print() {
    return (
        <IconButton icon={<PrintOutlined />} handleClick={window.print}>
            Print
        </IconButton>
    )
}
