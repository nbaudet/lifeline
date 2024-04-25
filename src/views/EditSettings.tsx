import { useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings'
import SettingsDialog from '../components/SettingsDialog'
import IconButton from '../components/base/IconButton'


interface IProps {
    variant?: 'contained' | 'text'
}
export default function EditSettings({variant}: IProps) {
    const [open, setOpen] = useState(false)

    const handleOpenState = () => {
        setOpen(!open)
    }

    return (
        <>
            <IconButton icon={<SettingsIcon />} variant={variant} handleClick={handleOpenState}>
                Settings
            </IconButton>
            <SettingsDialog open={open} onClose={handleOpenState} />
        </>
    )
}
