import { FileDownload } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import IconButton from './base/IconButton'
import { canDownloadFileSelector } from '../utils/selectors'

export default function SaveToFile() {
    const lifePoints = useSelector((state: RootState) => state.lifePoints)
    const settings = useSelector((state: RootState) => state.settings)
    const canDownloadFile = canDownloadFileSelector(lifePoints)

    function handleSave() {
        try {
            // Encode function
            const str = JSON.stringify({
                settings,
                lifePoints: lifePoints.present,
            })
            const bytes = new TextEncoder().encode(str)
            const blob = new Blob([bytes], {
                type: 'application/json;charset=utf-8',
            })

            // Create link and download the state in JSON file
            const fileName = settings.name.replace(/[^A-Z0-9]+/gi, '_')
            const downloadelem = document.createElement('a')
            const url = URL.createObjectURL(blob)
            document.body.appendChild(downloadelem)
            downloadelem.setAttribute('href', url)
            downloadelem.setAttribute('download', `${fileName}.json`)
            downloadelem.click()
            downloadelem.remove()
            URL.revokeObjectURL(url)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <IconButton
                icon={<FileDownload />}
                handleClick={handleSave}
                disabled={!canDownloadFile}
            >
                Save to file
            </IconButton>
        </>
    )
}
