import { Box, Button, Card, CardActions, CardContent, Container, Grid, Typography } from '@mui/material'
import EditSettings from './EditSettings'
import UploadFile from '../components/UploadFile'
import LoadSample from '../components/LoadSample'
import GitHubIcon from '@mui/icons-material/GitHub'
import LPAccordion from '../components/LPAccordion'
import { FileDownload } from '@mui/icons-material'

interface ICardProps {
    title: string
    children: React.ReactElement
}

const ThirdGridCard = ({ title, children }: ICardProps) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardContent sx={{ minHeight: '90px' }}>
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
                height: '100%',
            }}
        >
            <Card>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        Draw your <em>life line</em> graph
                    </Typography>

                    <LPAccordion
                        title={
                            <>
                                Your graph data is <em>yours</em>
                            </>
                        }
                    >
                        <>
                            <Typography gutterBottom>
                                Your graph is not sent or stored on the Internet. Instead you manage your own data by
                                downloading your progress using the <FileDownload sx={{ verticalAlign: 'bottom' }} />{' '}
                                button.
                            </Typography>
                            <Typography>
                                To test this, you can disconnect from Internet and see that the app still works as
                                before.
                            </Typography>
                        </>
                    </LPAccordion>
                    <LPAccordion title={'No cookies!'}>
                        <Typography>
                            This app doesn't require any cookie to work. In order to protect your data, I chose to not
                            use any adds or tracking services.
                        </Typography>
                    </LPAccordion>
                    <LPAccordion title={'What is a life line graph?'}>
                        <Typography gutterBottom>
                            If you want to learn more about life line graphs, I found{' '}
                            <a
                                title="Read Dr Chery Pence life line explanation"
                                href="https://cherylpence.com/life-line"
                            >
                                this page
                            </a>{' '}
                            provides a good explanation.
                        </Typography>
                    </LPAccordion>
                </CardContent>
                <CardActions>
                    <Button size="small" href="https://github.com/nbaudet/lifeline">
                        Look at the code
                        <GitHubIcon sx={{ m: '0 5px', fill: 'black' }} />
                    </Button>
                </CardActions>
            </Card>

            <Box sx={{ m: 2 }} />

            <Typography variant="h6" gutterBottom>
                How to start
            </Typography>

            <Grid container spacing={1} sx={{ justifyContent: 'center' }}>
                <ThirdGridCard title={'Start by entering some basic info:'}>
                    <EditSettings variant="contained" />
                </ThirdGridCard>
                <ThirdGridCard title={'Or open a previous Lifeline file to continue working on it:'}>
                    <UploadFile variant="contained" />
                </ThirdGridCard>
                <ThirdGridCard title={'Or test the app with some sample data:'}>
                    <LoadSample variant="contained" />
                </ThirdGridCard>
            </Grid>
        </Container>
    )
}
