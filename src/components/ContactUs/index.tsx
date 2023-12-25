import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 5%",
          margin: "5vh 0",
          width: "fit-content",

          flexDirection: "column",
          "@media (min-width: 600px)": {
            padding: "0 10%",
          width: "100%",

          },
        }}
        maxWidth={false}
      >
        <Box
          sx={{
            position: "relative",
            height: "20vh",
            width: "100%",
            borderRadius: "30px",
            background:
              "linear-gradient(90deg, #42D7F8 0%, #4282FE 52.98%, #262DFB 100%)",
            padding: "5vh",
            display: "flex",
            flexDirection: "column",
            flexBasis: "content",
          }}
        >
          <Typography variant="h5">WORK WITH US</Typography>
          <Typography variant="h3">We'd Love to get to know you.</Typography>

          <Button
            variant="contained"
            sx={{
              borderRadius: "30px",
              background: "white",
              width: "fit-content",
              marginTop: "5vh",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                // background:
                //   "linear-gradient(90deg, #42D7F8 0%, #4282FE 65.1%, #3A40FB 100%)",
                // backgroundClip: "text",
                color: '#42D7F8',
              }}
            >
              Get in Touch
            </Typography>
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default ContactUs;
