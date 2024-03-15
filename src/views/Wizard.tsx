import { Box, Typography } from '@mui/material'
import EditSettings from './EditSettings'
import UploadFile from '../components/UploadFile'

export default function Wizard() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'flex-end',
                alignItems: 'center',
                height: '100%',
            }}
        >
            <Typography variant="h5">
                Start by entering some basic info
            </Typography>
            <Box sx={{ m: 2 }} />
            <EditSettings />
            <Box sx={{ m: 4 }} />
            <Typography variant="h5">
                Or open a previous Lifeline file to continue working on it
            </Typography>
            <Box sx={{ m: 2 }} />
            <UploadFile />
        </Box>
    )
}
