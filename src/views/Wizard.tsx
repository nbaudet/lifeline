import { Box, Button, Card, CardActions, CardContent, Container, Grid, Typography } from '@mui/material'
import EditSettings from './EditSettings'
import UploadFile from '../components/UploadFile'
import LoadSample from '../components/LoadSample'

interface ICardProps {
    title: string
    children: React.ReactElement
}

const ThirdGridCard = ({ title, children }: ICardProps) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardContent>
                    <Typography gutterBottom>{title}</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>{children}</CardActions>
            </Card>
        </Grid>
    )
}

export default function Wizard() {
    return (
        <Container
            maxWidth={'md'}
            sx={{
                m: '30px auto',
                justifyContent: 'center',
                alignContent: 'flex-end',
                alignItems: 'center',
                height: '100%',
            }}
        >
            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        LifeLine Draw is a free and Open-Source software to draw life line graphs.
                    </Typography>
                    <Typography>
                        When using this app, the <strong>total privacy of your data</strong> is guaranteed:
                    </Typography>
                    <ul>
                        <Typography component="li">it doesn't send or store any data to the Internet</Typography>
                        <Typography component="li">it doesn't require any cookie</Typography>
                    </ul>
                    <Typography variant="caption">
                        To test this, you can disconnect from Internet and see that the app still works as before.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">More about Lifeline graphs</Button>
                    <Button size="small">Buy me a coffee</Button>
                    <Button size="small" href="https://github.com/nbaudet/lifeline">Look at the code</Button>
                </CardActions>
            </Card>

            <Box sx={{ m: 2 }} />

            <Typography variant="h6" gutterBottom>
                How to start
            </Typography>

            <Grid container spacing={1} sx={{ justifyContent: 'center' }}>
                <ThirdGridCard title={'Start by entering some basic info:'}>
                    <EditSettings />
                </ThirdGridCard>
                <ThirdGridCard title={'Or open a previous Lifeline file to continue working on it:'}>
                    <UploadFile />
                </ThirdGridCard>
                <ThirdGridCard title={'Or test the app with some sample data:'}>
                    <LoadSample />
                </ThirdGridCard>
            </Grid>
        </Container>
    )
}
