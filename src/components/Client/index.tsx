import React from "react";
import { Box, Container, Typography,Grid} from "@mui/material";
import Card from "./Components/Cards";
type Props = {};

const Client = (props: Props) => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0",
          margin: "5vh 0",
          flexDirection: "column",
          "@media (min-width: 600px)": {
            padding: "0 10%",
          },
        }}
      >

        <Box >
          <Typography variant="h5">Our Clients</Typography>
        </Box>
        <Box>
          <Typography variant="h4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, quidem.</Typography>
        </Box>

        <Grid container sx={{marginTop:"5vh"}}>
          <Grid item xs={12} sm={6} lg={3}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Card />
          </Grid>
          </Grid> 

      </Container>
    </>
  );
};

export default Client;
