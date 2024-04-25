import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useId } from 'react'

interface IProps {
    title: string | React.ReactElement
    children: React.ReactElement
}

export default function LPAccordion({ title, children }: IProps) {
    const summaryId = useId()
    const contentId = useId()

    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={contentId} id={summaryId}>
                <Typography variant="h6">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
    )
}
