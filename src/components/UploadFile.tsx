import { ChangeEvent } from 'react'
import FileOpenIcon from '@mui/icons-material/FileOpen'
import { useDispatch } from 'react-redux'
import { lifePointSetted } from '../features/lifePoints/lifePointsSlice'
import { settingmodified } from '../features/settings/settingsSlice'
import IconButton from './base/IconButton'
import { ActionCreators } from 'redux-undo'

export default function UploadFile() {
    const dispatch = useDispatch()

    const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return
        }
        const file = e.target.files[0]

        const reader = new FileReader()
        reader.onload = (evt) => {
            if (!evt?.target?.result) {
                return
            }
            const { result } = evt.target
            const data = JSON.parse(result as string)
            dispatch(ActionCreators.clearHistory())
            dispatch(settingmodified(data.settings))
            dispatch(lifePointSetted(data.lifePoints))
        }
        reader.readAsText(file, 'utf-8')
    }

    return (
        <IconButton icon={<FileOpenIcon />}>
            <>
                Load save
                <input type="file" accept=".json" hidden onChange={handleUpload} />
            </>
        </IconButton>
    )
}
