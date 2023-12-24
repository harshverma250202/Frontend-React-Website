import React from 'react'
import {Box} from '@mui/material'
import HeaderImage from '../../assets/images/header-background.webp'
type Props = {}

const Header = (props: Props) => {
  return (
    <>
    <Box sx={{
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${HeaderImage})`,
        backgroundSize: 'cover',
    }}>

        <Box  sx={
            {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
            }
        } >
            <Box sx={{display:'flex'}}>
                Main Heading
            </Box>
            <Box sx={{display:'flex'}}>
                Sub Heading
            </Box>
        </Box>



    </Box>
    </>
  )
}

export default Header