import React from "react";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import Card from "./components/Card";
import Pic1 from "../../assets/images/pic1.png";
import Pic2 from "../../assets/images/pic2.png";
import Pic3 from "../../assets/images/pic3.png";
import Pic4 from "../../assets/images/pic4.png";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "5vh 0",
          width: "100%",
          flexDirection: "column",
          "@media (min-width: 600px)": {
            margin: "5vh 10%",
            width: "80%",
          },
          position: "relative",
        }}
        maxWidth={false}
      >
        <Box sx={{ position: "absolute", left: "0",top:"0" }}>
          <Typography variant="h5">FlagShip Projects</Typography>
        </Box>

        <Grid container spacing={1} sx={{ width: "100%", marginTop: "5vh" }}>
          <Grid item xs={12} sm={6}>
            <Card image={Pic1} mainText="Night googles by Mindchatter" subText="Website design, Art direction, Development" />
            <Card image={Pic2} mainText="Night googles by Mindchatter" subText="Website design, Art direction, Development" />
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
            <Card image={Pic3} mainText="Night googles by Mindchatter" subText="Website design, Art direction, Development" />
            <Card image={Pic4} mainText="Night googles by Mindchatter" subText="Website design, Art direction, Development" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Portfolio;
