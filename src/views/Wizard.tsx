import { Box, Container, Typography } from '@mui/material'
import EditSettings from './EditSettings'
import UploadFile from '../components/UploadFile'

export default function Wizard() {
    return (
        <Container
            maxWidth={'sm'}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'flex-end',
                alignItems: 'center',
                height: '100%',
            }}
        >
            <Typography>
                This is a free and Open-Source software. We don't store any personal data, and we don't use any cookie
                to guarantee the total privacy of your data.
            </Typography>
            <Box sx={{ m: 2 }} />
            <Typography variant="h5">Start by entering some basic info</Typography>
            <Box sx={{ m: 2 }} />
            <EditSettings />
            <Box sx={{ m: 4 }} />
            <Typography variant="h5">Or open a previous Lifeline file to continue working on it</Typography>
            <Box sx={{ m: 2 }} />
            <UploadFile />
        </Container>
    )
}
