import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { alertClosed } from '../features/alert/alertSlice'

export default function TransitionAlerts() {
    const alert = useSelector((state: RootState) => state.alert)
    const dispatch = useDispatch()

    if (!alert.text) {
        return null
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Alert
                variant="filled"
                severity={alert.severity}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            dispatch(alertClosed())
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{ position: 'fixed', bottom: 0, right: 0, width: '100%' }}
            >
                {alert.text}
            </Alert>
        </Box>
    )
}
