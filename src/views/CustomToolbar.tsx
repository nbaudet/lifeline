import { AppBar, Toolbar } from '@mui/material'
import Title from '../components/Title'
import EditSettings from './EditSettings'
import UploadFile from '../components/UploadFile'
import SaveToFile from '../components/SaveToFile'
import Undo from '../components/Undo'
import Redo from '../components/Redo'

export default function CustomToolbar() {
    return (
        <AppBar
            sx={{
                position: 'relative',
                '@media print': {
                    display: 'none',
                },
            }}
        >
            <Toolbar>
                <Title />
                <Undo />
                <Redo />
                <EditSettings />
                <UploadFile />
                <SaveToFile />
            </Toolbar>
        </AppBar>
    )
}