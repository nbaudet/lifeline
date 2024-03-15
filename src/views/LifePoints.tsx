import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { Box, List, ListItem } from '@mui/material'

export default function LifePoints() {
    const lifePoints = useSelector((state: RootState) => state.lifePoints)

    if (!lifePoints) {
        return
    }

    return (
        <List>
            {lifePoints.present.map((point) => (
                <ListItem key={point.id} sx={{ display: 'block' }}>
                    <Box component="h3">
                        {point.date} - {point.title} [{point.value}]
                    </Box>
                    <Box component="p" sx={{ m: 0 }}>{point.description}</Box>
                </ListItem>
            ))}
        </List>
    )
}
