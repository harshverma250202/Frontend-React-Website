import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Card from "./components/Card";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          // alignItems: "center",
          margin: "5vh 0",
          width: "100%",
          flexDirection: "column",
          "@media (min-width: 600px)": {
            margin: "5vh 10%",
            width: "80%",
          },
          position: "relative",
        }}
      >
        <Box>
          <Typography variant="h6">Our Services</Typography>
        </Box>
        <Box
          sx={{
            "@media (min-width: 600px)": {
              width: "70%",
            },
            width: "100%",
          }}
        >
          <Typography variant="h3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </Typography>
        </Box>
        <Box sx={{marginTop:"5vh",display:'flex',flexDirection:'column'}}>
            <Card/>
            <Card/>
            <Card/>
        </Box>
      </Box>
    </>
  );
};

export default AboutUs;
