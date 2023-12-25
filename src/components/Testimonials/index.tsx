import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
type Props = {};

const Testimonials = (props: Props) => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          margin: "5vh 0",
          flexDirection: "column",
          width: "100%",
          "@media (min-width: 600px)": {
            margin: "5vh 10%",
            width: "80%",
          },
          position: "relative",
        }}
        maxWidth={false}
      >
        <Box>
          <Typography variant="h5">Testimonials</Typography>
        </Box>

        <Grid container sx={{ margin: "5vh 0" }}>
          <Grid item xs={1} sm={1}>
            <Box
              sx={{ width: "100%", height: "40vh", background: "red" }}
            ></Box>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Box
              sx={{ width: "100%", height: "40vh", background: "blue" }}
            ></Box>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Box
              sx={{ width: "100%", height: "40vh", background: "green" }}
            ></Box>
          </Grid>
          <Grid item xs={1} sm={1}>
            <Box
              sx={{ width: "100%", height: "40vh", background: "white" }}
            ></Box>
          </Grid>
        </Grid>
        <Box>
          <Typography variant="h3">
            01<Typography sx={{display:'inline-block'}} variant="h6">/02</Typography>
          </Typography>
        </Box>
      </Container>
    </>
  );
};
export default Testimonials;
