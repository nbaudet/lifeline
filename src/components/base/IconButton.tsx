import Button from '@mui/material/Button'
import { UnknownAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

interface IProps {
    icon: React.ReactElement
    children: string | React.ReactElement
    handleClick?: any
    handleClickAction?: UnknownAction
}

export default function IconButton({ icon, children, handleClick, handleClickAction }: IProps) {
    const dispatch = useDispatch()
    return (
        <Button
            startIcon={icon}
            variant="text"
            color="inherit"
            component="label"
            onClick={() => {
                if (handleClick) {
                    return handleClick()
                }
                if (handleClickAction) {
                    return dispatch(handleClickAction)
                }
            }}
            sx={{ flexDirection: 'column' }}
        >
            {children}
        </Button>
    )
}
