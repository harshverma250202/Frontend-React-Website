import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Card from "./Components/Cards";
import paperBoatIcon from "../../assets/images/paperBoatIcon.png";
type Props = {};

const StyledButton = styled(Button)({
  marginTop: "5vh",
  transform: "translateY(-50%)",
  borderRadius: "30px",
  background: "linear-gradient(90deg, #42D7F8 0%, #4282FE 65.1%, #3A40FB 100%)",
  width: "fit-content",
  padding: "1.5vh 2vw",
});

const StyledContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0",
  margin: "5vh 0",
  flexDirection: "column",
  "@media (min-width: 600px)": {
    padding: "0 10%",
  },
});

const Client = (props: Props) => {
  return (
    <>
      <StyledContainer
        maxWidth={false}
      >
        <Box>
          <Typography variant="h5">Our Clients</Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">
            We have re-defined experiences for over
          </Typography>
          <Typography variant="h4" sx={{ color: "#3C50FC" }}>
            50+ clients
          </Typography>
        </Box>

        <Grid container sx={{ marginTop: "5vh" }}>
          <Grid item xs={6} sm={6} lg={3}>
            <Card
              image={paperBoatIcon}
              mainText="Levelling up the end-user learning experience"
            />
          </Grid>
          <Grid item xs={6} sm={6} lg={3}>
            <Card
              image={paperBoatIcon}
              mainText="Levelling up the end-user learning experience"
            />
          </Grid>
          <Grid item xs={6} sm={6} lg={3}>
            <Card
              image={paperBoatIcon}
              mainText="Levelling up the end-user learning experience"
            />
          </Grid>
          <Grid item xs={6} sm={6} lg={3}>
            <Card
              image={paperBoatIcon}
              mainText="Levelling up the end-user learning experience"
            />
          </Grid>
        </Grid>
        <StyledButton variant="contained" endIcon={<ArrowRightAlt />}>
          View All
        </StyledButton>
      </StyledContainer>
    </>
  );
};

export default Client;
