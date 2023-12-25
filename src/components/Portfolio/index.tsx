import React from "react";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import Card from "./components/Card";

type Props = {};

const Portfolio = (props: Props) => {
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
        maxWidth={false}
      >
        <Box sx={{ postion: "relative", left: "0" }}>
          <Typography variant="h5">FlagShip Projects</Typography>
        </Box>

        <Grid container spacing={1} sx={{ width: "100%", marginTop: "5vh" }}>
          <Grid item xs={12} sm={6}>
            <Card />
            <Card />
            <Button
              variant="contained"
              sx={{
                marginTop: "5vh",
                transform: "translateY(-50%)",
                borderRadius: "30px",
                background:
                  "linear-gradient(90deg, #42D7F8 0%, #4282FE 65.1%, #3A40FB 100%)",
                width: "fit-content",
                padding: "1vh 2vw",
                
              }
            
            }
            endIcon={<ArrowRightAlt />}

            >
              View All
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ marginTop: "5vh" }}>
            <Card />
            <Card />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Portfolio;
