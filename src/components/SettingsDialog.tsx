import { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import SaveIcon from '@mui/icons-material/Save'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { AppState, Settings } from '../types'
import { settingmodified } from '../features/settings/settingsSlice'
import { useDispatch, useSelector } from 'react-redux'

interface SimpleDialogProps {
    open: boolean
    onClose: () => void
}

export default function SettingsDialog({ onClose, open }: SimpleDialogProps) {
    const settings = useSelector((state: AppState) => state.settings)
    const [newSettings, setNewSettings] = useState<Settings>(settings)
    const dispatch = useDispatch()

    useEffect(() => {
        setNewSettings(settings)
    }, [settings])

    const handleOnClose = (newSettings?: Settings) => {
        if (newSettings) dispatch(settingmodified(newSettings))
        onClose()
    }

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setNewSettings({
            ...newSettings,
            [e.target.name]: e.target?.value || '',
        })
    }

    return (
        <Dialog onClose={() => handleOnClose()} open={open} sx={{ m: '5px' }}>
            <DialogTitle>Edit settings</DialogTitle>
            <Box sx={{ width: 300, p: 2, display: 'grid' }}>
                <TextField
                    name="name"
                    value={newSettings.name}
                    onChange={(name) => handleOnChange(name)}
                    label="Name of the graph"
                    type="text"
                    variant="outlined"
                    required
                />
                <Box sx={{ m: 2 }} />
                <TextField
                    id="birthDateDialog"
                    name="birthDate"
                    value={newSettings.birthDate}
                    onChange={(date) => handleOnChange(date)}
                    label="Date of birth"
                    type="date"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    required
                />
                <Box sx={{ m: 2 }} />

                <Button
                    type="submit"
                    onClick={() => handleOnClose(newSettings)}
                    startIcon={<SaveIcon />}
                >
                    Save settings
                </Button>
            </Box>
        </Dialog>
    )
}
