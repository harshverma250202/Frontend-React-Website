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
          margin: "5vh 0",
          width: "100%",

          flexDirection: "column",
          "@media (min-width: 600px)": {
            margin: "5vh 10%",
            width: "80%",
          },
        }}
        maxWidth={false}
      >
        <Box
          sx={{
            position: "relative",
            height: "20vh",
            width: "90%",
            borderRadius: "30px",
            background:
              "linear-gradient(90deg, #42D7F8 0%, #4282FE 52.98%, #262DFB 100%)",
            padding: "5vh 5%",
            display: "flex",
            flexDirection: "column",
            flexBasis: "content",
          }}
        >
          <Typography variant="h6">WORK WITH US</Typography>
          <Typography
            variant="h3"
            sx={{
              "@media(max-width:600px)": {
                fontSize: "2rem",
              },
            }}
          >
            We'd Love to get to know you.
          </Typography>

          <Button
            variant="contained"
            sx={{
              borderRadius: "30px",
              background: "white",
              width: "fit-content",
              marginTop: "5vh",
              boxShadow: "none",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                // background:
                //   "linear-gradient(90deg, #42D7F8 0%, #4282FE 65.1%, #3A40FB 100%)",
                // backgroundClip: "text",
                color: "#42D7F8",
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
