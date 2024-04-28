import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

export default function GraphName() {
    const settings = useSelector((state: RootState) => state.settings)
    return (
        <Typography className="print-only" variant="h3">
            {settings.name}
        </Typography>
    )
}
