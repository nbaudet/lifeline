import { Button } from '@mui/material'
import { FileDownload } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

// declare global {
//     interface Window {
//         showSaveFilePicker: (any) => Promise<FileSystemFileHandle>
//     }
// }

export default function SaveToFile() {
    // const stateRef = useRef<AppState>()

    const lifePoints = useSelector((state: RootState) => state.lifePoints)
    const settings = useSelector((state: RootState) => state.settings)

    async function handleSave() {
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

            // Create link and download it
            const fileName = settings.name.replace(/[^A-Z0-9]+/gi, '_')
            const downloadelem = document.createElement('a')
            const url = URL.createObjectURL(blob)
            document.body.appendChild(downloadelem)
            downloadelem.setAttribute('href', url)
            downloadelem.setAttribute('download', `${fileName}.json`)
            downloadelem.click()
            downloadelem.remove()
            URL.revokeObjectURL(url)

            // // create a new handle
            // const newHandle = await window.showSaveFilePicker({
            //     suggestedName: 'lifePoints.json',
            // })

            // // create a FileSystemWritableFileStream to write to
            // const writableStream = await newHandle.createWritable()

            // // write our file
            // await writableStream.write(JSON.stringify(state))

            // // close the file and write the contents to disk.
            // await writableStream.close()
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <Button
                startIcon={<FileDownload />}
                variant="text"
                color="inherit"
                component="label"
                onClick={handleSave}
                sx={{ flexDirection: 'column' }}
            >
                Save to file
            </Button>
        </>
    )
}
