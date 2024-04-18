import Logo from '../assets/logo.svg?react'
import { SvgIcon } from '@mui/material'

export default function Title() {
    return (
        <SvgIcon component="div" sx={{ m: 1, height: '64px', width: '64px', flexGrow: 1 }}>
            <Logo />
        </SvgIcon>
    )
}
