import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { Box, ListItem } from '@mui/material'
import { useMemo } from 'react'
import { LifePoint as LP } from '../types'
import { getAge } from '../utils/utils'

interface IProps {
    point: LP
}

export default function LifePoint({ point }: IProps) {
    const settings = useSelector((state: RootState) => state.settings)

    const age = useMemo(() => {
        return getAge(settings.birthDate, point.date)
    }, [settings.birthDate, point.date])

    return (
        <ListItem sx={{ display: 'block' }}>
            <Box component="h3">
                {point.date} - {point.title} [{point.value}] - {age}
            </Box>
            <Box component="p" sx={{ m: 0 }}>
                {point.description}
            </Box>
        </ListItem>
    )
}
