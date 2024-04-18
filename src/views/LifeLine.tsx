import {
    Chart as ChartJS,
    CategoryScale,
    Colors,
    LinearScale,
    TimeScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeUnit,
} from 'chart.js'
import 'chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm'
import { useMemo, useState } from 'react'
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
import theme from '../theme'

ChartJS.register(
    CategoryScale,
    Colors,
    LinearScale,
    PointElement,
    TimeScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
)

const GRAPH_COLOR = 'rgb(75, 192, 192)'

export default function LifeLine() {
    const lifePoints = useSelector((state: RootState) => state.lifePoints)
    const [open, setOpen] = useState(false)

    const gridLinesColors = useMemo(() => {
        const normal = 'rgb(232, 232, 232)'
        const center = 'rgba(97, 97, 97, 0.4)'
        const colors = []
        for (let i = -5; i <= 5; i++) {
            if (i === 5) colors.push(theme.palette.success.light)
            else if (i === -5) colors.push(theme.palette.error.light)
            else if (i === 0) colors.push(center)
            else colors.push(normal)
        }
        return colors
    }, [])

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
                align: 'top' as Partial<Anchor>,
                anchor: 'top' as Partial<Anchor>,
            },
        },

        scales: {
            x: {
                type: 'time' as const,
                time: {
                    unit: 'year' as Partial<TimeUnit>,
                    displayFormats: {
                        quarter: 'DD MM YYYY',
                    },
                },
            },
            y: {
                max: 5,
                min: -5,
                ticks: {
                    stepSize: 1,
                },
                grid: {
                    color: gridLinesColors,
                    lineWidth: (ctx: any) => (ctx.tick.value % 5 === 0 ? 2 : 1),
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
        <Box sx={{ mt: 3, justifyContent: 'center', breakAfter: 'page' }}>
            <Line options={options} data={_data} />
            <AddLifePoint />
            <LifePointDialog open={open} onClose={handleOpenState} initialData={initialData} isEditing />
        </Box>
    )
}
