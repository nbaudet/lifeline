import { PrintOutlined } from '@mui/icons-material'
import IconButton from './base/IconButton'
import { hasLifePointSelector } from '../utils/selectors'
import { RootState } from '../app/store'
import { useSelector } from 'react-redux'

export default function Print() {
    const lifePoints = useSelector((state: RootState) => state.lifePoints)
    const hasLifePoint = hasLifePointSelector(lifePoints)

    return (
        <IconButton icon={<PrintOutlined />} handleClick={window.print} disabled={!hasLifePoint}>
            Print
        </IconButton>
    )
}
