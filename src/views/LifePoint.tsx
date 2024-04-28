import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { Box, ListItem, TextField, Typography } from '@mui/material'
import { useMemo } from 'react'
import type { LifePoint } from '../types'
import { getAge } from '../utils/utils'
import dayjs from 'dayjs'
import theme from '../theme'

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
            <Box component="h3" sx={{ breakAfter: 'avoid-column' }}>
                {dayjs(point.date).format('DD.MM.YYYY')} · {point.title} [{point.value}] · {age}
            </Box>

            {point.description && (
                <>
                    <TextField
                        value={point.description}
                        className="screen-only"
                        disabled
                        multiline
                        sx={{
                            m: 0,
                            width: '100%',
                            '& .MuiInputBase-root::before': { border: 0 },
                            '& .MuiInputBase-input': {
                                color: theme.palette.text.primary,
                                WebkitTextFillColor: theme.palette.text.primary,
                            },
                        }}
                        variant="standard"
                    />
                    <Typography
                        className="print-only"
                        dangerouslySetInnerHTML={{ __html: point.description.replace(/\r\n|\r|\n/g, '<br />') }}
                    ></Typography>
                </>
            )}
        </ListItem>
    )
}
