import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import LifePointDialog from '../components/LifePointDialog'
import { Fab } from '@mui/material'

export default function DialogAddPoint() {
    const [open, setOpen] = useState(false)

    const handleOpenState = () => {
        setOpen(!open)
    }

    return (
        <>
            <Fab
                color="primary"
                aria-label="Add life point"
                onClick={handleOpenState}
                sx={{ position: 'relative', float: 'right', mt: '-100px', mr: '50px', '@media print': {
                    display: 'none',
                }, }}
            >
                <AddIcon />
            </Fab>
            {/* <Button type="button" color="inherit"  startIcon={<AddIcon />} sx={{ flexDirection: 'column' }}>
                
            </Button> */}
            <LifePointDialog open={open} onClose={handleOpenState} />
        </>
    )
}
