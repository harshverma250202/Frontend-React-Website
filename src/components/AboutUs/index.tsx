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
          <Typography variant="h3" sx={{"@media(max-width: 600px)":{
            fontSize:"2rem"
          }}}>
            We offer worthwhile experiences that help you go <span style={{color:'#4282FE'}}>above & beyond </span>and
            guide your business to drive impact.
          </Typography>
        </Box>
        <Box
          sx={{ width:'100%', marginTop: "5vh", display: "flex", flexDirection: "column" }}
        >
          <Card buttonName="UI/UX Design"/>
          <Card buttonName="Website Design"/>
          <Card buttonName="Development"/>
        </Box>
      </Box>
    </>
  );
};

export default AboutUs;
