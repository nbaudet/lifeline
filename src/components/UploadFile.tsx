import { ChangeEvent, useRef } from 'react'
import FileOpenIcon from '@mui/icons-material/FileOpen'
import { useDispatch } from 'react-redux'
import { lifePointsSetted } from '../features/lifePoints/lifePointsSlice'
import { settingModified } from '../features/settings/settingsSlice'
import IconButton from './base/IconButton'
import { ActionCreators } from 'redux-undo'
import { rootStateSchema } from '../types'
import { alertClosed, alertSetted } from '../features/alert/alertSlice'

export default function UploadFile() {
    const dispatch = useDispatch()
    const fileInput: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)

    const handleUpload = (e: ChangeEvent<HTMLInputElement | null>) => {
        if (!e.target.files || e.target.files.length === 0) {
            return
        }
        const file = e.target.files[0]

        const reader = new FileReader()
        reader.onload = async (evt) => {
            if (!evt?.target?.result) {
                return
            }
            try {
                const { result } = evt.target
                const data = JSON.parse(result as string)
                // Validate data
                dispatch(alertClosed())
                await rootStateSchema.validate(data)
                dispatch(ActionCreators.clearHistory())
                dispatch(settingModified(data.settings))
                dispatch(lifePointsSetted(data.lifePoints))
            } catch (e) {
                if(fileInput?.current?.value) {
                fileInput.current.value = ''
                }
                console.log('Error while loading JSON data: ', e)
                dispatch(
                    alertSetted({
                        severity: 'error',
                        text: 'Error while loading file. Open developer tools to know more.',
                    })
                )
            }
        }
        reader.readAsText(file, 'utf-8')
    }

    return (
        <IconButton icon={<FileOpenIcon />}>
            <>
                Load save
                <input type="file" ref={fileInput} accept=".json" hidden onChange={handleUpload} />
            </>
        </IconButton>
    )
}
