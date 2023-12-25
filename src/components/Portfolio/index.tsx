import React from 'react'
import { Container, Typography,Box, Grid } from "@mui/material"
import Card from './components/Card'

type Props = {}

const Portfolio = (props: Props) => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0", 
          margin:"5vh 0",
          flexDirection:'column',
          "@media (min-width: 600px)": {
            padding: "0 10%", 
          },
        }}
        maxWidth={false}
      >
        
        <Box sx={{postion:'relative',left:'0'}} >
            <Typography variant="h5" >FlagShip Projects</Typography>
        </Box>

        <Grid container spacing={1}>

            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card />
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card />
                <Card />
            </Grid>
        </Grid>

        


      </Container>
    
    </>
  )
}

export default Portfolio