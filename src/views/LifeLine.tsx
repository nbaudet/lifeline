import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    TimeScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import 'chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm'
import { useState } from 'react'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Context } from 'chartjs-plugin-datalabels'
import { Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import type { RootState } from '../app/store'
import { Box } from '@mui/material'
import { Anchor } from 'chartjs-plugin-datalabels/types/options'
import LifePointDialog from '../components/LifePointDialog'
import { LifePoint } from '../types'
import AddLifePoint from './AddLifePoint'

ChartJS.register(CategoryScale, LinearScale, PointElement, TimeScale, LineElement, Title, Tooltip, Legend, ChartDataLabels)

const GRAPH_COLOR = 'rgb(75, 192, 192)'

export default function LifeLine() {
    const lifePoints = useSelector((state: RootState) => state.lifePoints)
    const [open, setOpen] = useState(false)

    const handleOpenState = () => {
        setOpen(!open)
    }

    const [initialData, setInitialData] = useState<LifePoint | undefined>(undefined)

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            // Chart.js tooltip disabled in favor of chartjs-plugin-datalabels
            tooltip: {
                enabled: false,
            },

            datalabels: {
                backgroundColor: GRAPH_COLOR,
                borderRadius: 4,
                color: 'white',
                font: {
                    weight: 'bold' as const,
                },
                clamp: true,
                align: 'top' as Partial<Anchor>,
                anchor: 'top' as Partial<Anchor>,
            },
        },

        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'year',
                    displayFormats: {
                        quarter: 'DD MM YYYY'
                    }
                },
            },
            y: {
                max: 5,
                min: -5,
                ticks: {
                    stepSize: 1,
                },
            },
        },

        // Core options
        layout: {
            padding: {
                top: 32,
                right: 50,
                bottom: 16,
                left: 16,
            },
        },
    }

    const _data = {
        labels: lifePoints.present.map((e) => e.date),
        datasets: [
            {
                data: lifePoints.present.map((e) => e.value),
                backgroundColor: GRAPH_COLOR,
                borderColor: GRAPH_COLOR,
                tension: 0.3,

                datalabels: {
                    formatter: (_value: any, context: Context) => lifePoints.present[context.dataIndex].title,
                    listeners: {
                        click: function (context: Context) {
                            setInitialData(lifePoints.present[context.dataIndex])
                            setOpen(true)
                        },
                    },
                },
            },
        ],
    }

    return (
        <Box sx={{ mt: 3, justifyContent: 'center' }}>
            <Line options={options} data={_data} />
            <AddLifePoint />
            <LifePointDialog open={open} onClose={handleOpenState} initialData={initialData} isEditing />
        </Box>
    )
}
