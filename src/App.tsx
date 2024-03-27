import { Container } from '@mui/material'
import LifeLine from './views/LifeLine'
import CustomToolbar from './views/CustomToolbar'
import { RootState } from './app/store'
import { useSelector } from 'react-redux'
import Wizard from './views/Wizard'
import LifePoints from './views/LifePoints'
import GraphName from './components/GraphName'
import { isReadySelector } from './utils/selectors'
import Alert from './components/Alert'

function App() {
    const settings = useSelector((state: RootState) => state.settings)
    const isReady = isReadySelector(settings)

    return (
        <Container disableGutters={true} maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column' }}>
            <CustomToolbar />
            <GraphName />
            {!isReady && (
                <>
                    <Wizard />
                </>
            )}
            {isReady && (
                <>
                    <LifeLine />
                </>
            )}

            <LifePoints />
            <Alert />
        </Container>
    )
}

export default App
