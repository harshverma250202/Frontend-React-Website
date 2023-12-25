import React from 'react'
import { Box, Typography } from '@mui/material'

type Props = {
  image:string,
  mainText:string,
  subText:string
}

const Card = (props: Props) => {
  return (
    <>
        <Box sx={{width:'90%',padding:"5%"}}>
          <Box>
            <Box>
              <img src={props.image} style={{width:'100%',height:"100%",opacity:'0.5'}} alt="" />
            </Box>
            <Box sx={{marginTop:"2vh"}}>
              <Typography variant="h5">{props.mainText}</Typography>
              <Typography sx={{color:"#D4D4D4",opacity:0.5}}>{props.subText}</Typography>
            </Box>
          </Box>
        </Box>
    </>
  )
}

export default Card