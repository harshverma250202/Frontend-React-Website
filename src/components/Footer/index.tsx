import React from "react";
import {
  Container,
  Typography,
  Link,
  IconButton,
  Grid,
  Button,
  Box,
} from "@mui/material";
import { Facebook, LinkedIn, Twitter, YouTube } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
const Footer: React.FC = () => {
  return (
    <footer>
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
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <Typography variant="h6">Logo</Typography>
            <br />
            <Typography variant="body1" sx={{ color: "#4294FD" }}>
              Lorem ipsum dolor sit amet
            </Typography>
            <br />
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </Typography>
            <Box
              sx={{
                "@media(max-width:600px)": {
                  display: "none",
                },
              }}
            >
              <IconButton color="inherit">
                <Facebook />
              </IconButton>
              <IconButton color="inherit">
                <LinkedIn />
              </IconButton>
              <IconButton color="inherit">
                <Twitter />
              </IconButton>
              <IconButton color="inherit">
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ marginTop: "5vh" }}>
            <Typography variant="body1">
              <LocationOnIcon fontSize="inherit" /> 998 Devonshire Ave Camp
              Hill, PA 17011
            </Typography>
            <br />
            <Typography variant="body1">
              {" "}
              <EmailIcon fontSize="inherit" /> haddaway@comcast.net
            </Typography>
            <br />
            <Typography variant="body1">
              {" "}
              <WifiCalling3Icon fontSize="inherit" /> (334) 202-4792
            </Typography>
            <Box
              sx={{
                "@media(min-width:600px)": {
                  display: "none",
                },
              }}
            >
              <IconButton color="inherit">
                <Facebook />
              </IconButton>
              <IconButton color="inherit">
                <LinkedIn />
              </IconButton>
              <IconButton color="inherit">
                <Twitter />
              </IconButton>
              <IconButton color="inherit">
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{
              "@media(max-width:600px)": {
                display: "none",
              },
            }}
          >
            <Typography variant="h6" sx={{ color: "#4294FD" }}>
              Company
            </Typography>

            <Button href="#" sx={{ color: "white", display: "block" }}>
              The Team
            </Button>
            <Button href="#" sx={{ color: "white", display: "block" }}>
              Work
            </Button>
            <Button href="#" sx={{ color: "white", display: "block" }}>
              Services
            </Button>
            <Button href="#" sx={{ color: "white", display: "block" }}>
              Contact Us
            </Button>
          </Grid>
   
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
