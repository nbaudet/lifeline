import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import AddIcon from '@mui/icons-material/Add'
import SaveIcon from '@mui/icons-material/Save'
import TextField from '@mui/material/TextField'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'
import Box from '@mui/material/Box'
import { LifePoint, lifePointSchema } from '../types'
import Slider from '@mui/material/Slider'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { lifePointAdded, lifePointDeleted, lifePointModified } from '../features/lifePoints/lifePointsSlice'
import { Formik, Form } from 'formik'
import { DialogContent } from '@mui/material'
import { Delete } from '@mui/icons-material'
import { getAge } from '../utils/utils'
import { RootState } from '../app/store'

interface SimpleDialogProps {
    open: boolean
    onClose: () => void
    isEditing?: boolean
    initialData?: LifePoint
}

export default function LifePointDialog({ onClose, open, isEditing = false, initialData }: SimpleDialogProps) {
    const settings = useSelector((state: RootState) => state.settings)
    let initialLifePoint = initialData || {
        id: nanoid(),
        date: '',
        title: '',
        value: 0,
        description: '',
    }

    const dispatch = useDispatch()

    function handleDelete() {
        dispatch(lifePointDeleted(initialData))
        onClose()
    }

    const valuetext = (value: number) => {
        return value.toLocaleString('ch')
    }

    return (
        <Dialog
            onClose={() => {
                onClose()
            }}
            open={open}
            sx={{ m: '5px' }}
        >
            {!isEditing && <DialogTitle>Add life point</DialogTitle>}
            <DialogContent sx={{ width: 450 }}>
                <Formik
                    initialValues={initialLifePoint}
                    validationSchema={lifePointSchema}
                    onSubmit={(values) => {
                        isEditing ? dispatch(lifePointModified(values)) : dispatch(lifePointAdded(values))
                        onClose()
                    }}
                >
                    {({ handleChange, values, touched, errors }) => (
                        <Form noValidate>
                            <Box sx={{ pt: 2, display: 'grid' }}>
                                <Box
                                    sx={{
                                        display: 'inline-flex',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <TextField
                                        id="dateAddDialog"
                                        name="date"
                                        type="date"
                                        label="Date"
                                        sx={{ mr: 0 }}
                                        value={values.date}
                                        onChange={handleChange}
                                        error={touched.date && Boolean(errors.date)}
                                        helperText={touched.date && errors.date}
                                        variant="outlined"
                                        InputLabelProps={{ shrink: true }}
                                        required
                                    />
                                    <Box sx={{ m: 1 }} />
                                    <TextField
                                        id="titleAddDialog"
                                        name="title"
                                        label="Title"
                                        variant="outlined"
                                        value={values.title}
                                        onChange={handleChange}
                                        error={touched.title && Boolean(errors.title)}
                                        helperText={touched.title && errors.title}
                                        required
                                    />
                                </Box>
                                <Box sx={{ fontSize: 'small' }}>You were {getAge(settings.birthDate, values.date)}</Box>
                                <Box sx={{ m: 3 }} />
                                <TextField
                                    id="descrAddDialog"
                                    label="Description"
                                    multiline={true}
                                    rows={5}
                                    variant="outlined"
                                    name="description"
                                    value={values.description}
                                    onChange={handleChange}
                                />
                                <Box sx={{ m: 3 }} />
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <SentimentVeryDissatisfiedIcon />
                                    <Slider
                                        id="valueAddDialog"
                                        sx={{ marginX: 2 }}
                                        aria-label="Positivity level"
                                        defaultValue={0}
                                        getAriaValueText={valuetext}
                                        valueLabelDisplay="on"
                                        step={1}
                                        name="value"
                                        min={-5}
                                        max={5}
                                        value={values.value}
                                        onChange={handleChange}
                                    />
                                    <SentimentVerySatisfiedIcon />
                                </Box>
                                <Box sx={{ m: 3 }} />

                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    {isEditing && (
                                        <>
                                            <Button
                                                type="button"
                                                variant="contained"
                                                color="error"
                                                onClick={handleDelete}
                                            >
                                                <Delete />
                                            </Button>
                                            <Box sx={{ m: 1 }} />
                                        </>
                                    )}

                                    <Button type="submit" variant="contained">
                                        {isEditing && <SaveIcon />}
                                        {!isEditing && <AddIcon />}
                                    </Button>
                                </Box>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </DialogContent>
        </Dialog>
    )
}
