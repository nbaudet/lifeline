import Button from '@mui/material/Button'
import { UnknownAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

interface IProps {
    icon: React.ReactElement
    children: string | React.ReactElement
    variant?: 'contained' | 'text'
    handleClick?: any
    handleClickActions?: UnknownAction[]
    disabled?: boolean
}

export default function IconButton({
    icon,
    children,
    variant = 'text',
    handleClick,
    handleClickActions,
    disabled = false,
}: IProps) {
    const dispatch = useDispatch()
    return (
        <Button
            startIcon={icon}
            variant={variant}
            color={!disabled && variant === 'text' ? 'inherit' : 'primary'}
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
