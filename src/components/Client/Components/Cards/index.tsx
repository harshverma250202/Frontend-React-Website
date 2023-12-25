import React from "react";
import { Box, Typography } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";

type Props = {
  image: string;
  mainText: string;
};

const Card = (props: Props) => {
  return (
    <>
      <Box
        sx={{
          height: "30vh",
          position: "relative",
          padding: "5%",
          border: "0.5px solid #B9B9B9",
          margin: "10px",
        }}
      >
        <Box sx={{ width: "90%" }}>
          <img
            src={props.image}
            // style={{ width: "100%", height: "100%" }}
            alt=""
          />
        </Box>
        <Box sx={{  position: "absolute", bottom: "0",transform:"translateY(-50%)" }}>
          <NorthEastIcon sx={{color:"#B9B9B9"}}></NorthEastIcon>
          <Typography sx={{color:"#B9B9B9","@media(max-width:600px)":{
            fontSize:"0.8rem"
          }}} variant="h6">{props.mainText}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Card;
