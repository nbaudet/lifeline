import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { List } from '@mui/material'
import LifePoint from './LifePoint'

export default function LifePoints() {
    const lifePoints = useSelector((state: RootState) => state.lifePoints)

    if (!lifePoints) {
        return
    }

    return (
        <List
            sx={{
                '@media print': {
                    columnCount: 2,
                },
            }}
        >
            {lifePoints.present.map((point) => (
                <LifePoint point={point} key={point.id} />
            ))}
        </List>
    )
}
