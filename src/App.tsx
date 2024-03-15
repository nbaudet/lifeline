import { Container } from '@mui/material'
import LifeLine from './views/LifeLine'
import CustomToolbar from './views/CustomToolbar'
import { AppState } from './types'
import { useSelector } from 'react-redux'
import Wizard from './views/Wizard'
import LifePoints from './views/LifePoints'
import GraphName from './components/GraphName'

function App() {
    const settings = useSelector((state: AppState) => state.settings)
    const hasState = settings.name !== ''

    return (
        <Container disableGutters={true} maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column' }}>
            <CustomToolbar />
            <GraphName />
            {!hasState && (
                <>
                    <Wizard />
                </>
            )}
            {hasState && (
                <>
                    <LifeLine />
                </>
            )}

            <LifePoints />
        </Container>
    )
}

export default App
