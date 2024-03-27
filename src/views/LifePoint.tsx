import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { Box, ListItem } from '@mui/material'
import { useMemo } from 'react'
import type { LifePoint } from '../types'
import { getAge } from '../utils/utils'
import dayjs from 'dayjs'

interface IProps {
    point: LifePoint
}

export default function LifePoint({ point }: IProps) {
    const settings = useSelector((state: RootState) => state.settings)

    const age = useMemo(() => {
        if (!settings.birthDate || !point.date) {
            return null
        }
        return getAge(settings.birthDate, point.date.toString())
    }, [settings.birthDate, point.date])

    return (
        <ListItem sx={{ display: 'block' }}>
            <Box component="h3">
                {dayjs(point.date).format('DD.MM.YYYY')} - {point.title} [{point.value}] - {age}
            </Box>
            <Box component="p" sx={{ m: 0 }}>
                {point.description}
            </Box>
        </ListItem>
    )
}
