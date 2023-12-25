import React from "react";
import { Container, Box } from "@mui/material";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0",
          margin: "5vh 0",
          width: "100%",
          flexDirection: "column",
          "@media (min-width: 600px)": {
            padding: "0 10%",
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
          }}
        ></Box>
      </Container>
    </>
  );
};

export default ContactUs;
