import React from "react";
import { Box } from "@mui/material";
import FreeTrialImage from "../../assets/images/FreeTrial.png";
type Props = {};

const FreeTrial = (props: Props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          height: "100vh",
          width: "100%",
        }}
      >
        <img src={FreeTrialImage} alt="Events" style={{ width: "100%" }} />
      </Box>
    </>
  );
};

export default FreeTrial;
