import Button from '@mui/material/Button'
import { UnknownAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

interface IProps {
    icon: React.ReactElement
    children: string | React.ReactElement
    handleClick?: any
    handleClickActions?: UnknownAction[]
    disabled?: boolean
}

export default function IconButton({ icon, children, handleClick, handleClickActions, disabled = false }: IProps) {
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
                if (handleClickActions) {
                    return handleClickActions.map((action) => dispatch(action))
                }
            }}
            sx={{ flexDirection: 'column', '& .MuiButton-icon': { m: 0 } }}
            disabled={disabled}
        >
            {children}
        </Button>
    )
}
