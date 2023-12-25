import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import Left from "../../assets/images/Previous.png";
import Right from "../../assets/images/Next.png";
import ImageGradient from "../../assets/images/ImageGradient.png";
import TestimonialImage from "../../assets/images/TestimonialImage.png";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
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
          <Grid
            item
            xs={1}
            sm={1}
            sx={{ display: "flex", flexDirection: "column-reverse" }}
          >
            <img
              src={Left}
              alt="Left"
              style={{ width: "100%", display: "flex" }}
            />
          </Grid>
          <Grid item xs={4} sm={4} style={{ position: "relative" }}>
            <img
              src={ImageGradient}
              alt="ImageGradient"
              style={{
                width: "100%",
                position: "absolute",
                bottom: "0",
                zIndex: "3",
              }}
            />
            <img
              src={TestimonialImage}
              style={{ width: "100%", position: "relative", zIndex: "2" }}
              alt="TestimonialImage"
            />
            <Box
              style={{
                position: "absolute",
                bottom: "0",
                background: "#808080",
                height: "80%",
                width: "100%",
                zIndex: "1",
              }}
            ></Box>
          </Grid>
          <Grid item xs={6} sm={6} sx={{ position: "relative" }}>
            <Box sx={{ display: "flex", padding: "2%", marginTop: "20%" }}>
              <Typography
                variant="h4"
                sx={{
                  "@media(max-width:800px)": {
                    fontSize: "1rem",
                  },
                  
                }}
              >
                SAKSHI VERMA
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                padding: "5% 2%",
                position: "absolute",
                bottom: "0",
                background: "#212121",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6" sx={{ display: "flex" }}>
                <FormatQuoteIcon />
              </Typography>
              <Typography
                variant="body1"
                sx={{ display: "flex", fontSize: "1.8vw" }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={1}
            sm={1}
            sx={{ display: "flex", flexDirection: "column-reverse" }}
          >
            <img src={Right} alt="Right" style={{ width: "100%" }} />
          </Grid>
        </Grid>
        <Box>
          <Typography variant="h3">
            01
            <Typography sx={{ display: "inline-block" }} variant="h6">
              /02
            </Typography>
          </Typography>
        </Box>
      </Container>
    </>
  );
};
export default Testimonials;
