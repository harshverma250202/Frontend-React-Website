import React from "react";
import { Box, Typography } from "@mui/material";
import HeaderImage from "../../assets/images/header-background.webp";
import ScrollDownImage from "../../assets/images/ScrollDown.png";
import classes from "./header.module.css";
type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          backgroundImage: `url(${HeaderImage})`,
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Frranco<span style={{ color: "blue" }}>.</span> IT&nbsp;Service
              Provider<span style={{ color: "blue" }}>.</span>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", width: "40%" }}>
            <Box sx={{ width: "5%", display: "flex" }}>
              <div
                style={{
                  margin: "auto",
                  width: "2px",
                  height: "100%",
                  background: "white",
                }}
              ></div>
            </Box>
            <Box sx={{ width: "95%", display: "flex" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                <span style={{ color: "blue" }}>Frranco</span> is a IT company
                dealing in design and development from the last 1 year.
                Excelling in 2 dept. UI/UX Design and Development.
              </Typography>
            </Box>
          </Box>
        </Box>
        <img
          src={ScrollDownImage}
          alt="Scroll Down"
          className={classes.scrollDown}
        />
      </Box>
    </>
  );
};

export default Header;
