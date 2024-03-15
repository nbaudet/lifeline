import { useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings'
import SettingsDialog from '../components/SettingsDialog'
import IconButton from '../components/base/IconButton'

export default function EditSettings() {
    const [open, setOpen] = useState(false)

    const handleOpenState = () => {
        setOpen(!open)
    }

    return (
        <>
            <IconButton icon={<SettingsIcon />} handleClick={handleOpenState}>
                Settings
            </IconButton>
            <SettingsDialog open={open} onClose={handleOpenState} />
        </>
    )
}
