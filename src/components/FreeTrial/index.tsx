import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ArrowRightAlt } from "@mui/icons-material";
import FreeTrialImage from "../../assets/images/FreeTrial.png";

const StyledButton = styled(Button)({
  marginTop: "5vh",
  transform: "translateY(-50%)",
  borderRadius: "30px",
  background: "linear-gradient(90deg, #42D7F8 0%, #4282FE 65.1%, #3A40FB 100%)",
  width: "fit-content",
  padding: "1.5vh 2vw",
});
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
          // height:"fit-content",
          "@media (max-width: 600px)": {
            height: "fit-content",
          },
          width: "100%",
        }}
      >
        <img
          src={FreeTrialImage}
          alt="Events"
          style={{ width: "100%", position: "absolute" }}
        />
        <Box
          sx={{
            position: "realtive",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            width: "80%",
            "@media (max-width: 600px)": {
              width: "100%",
            },
          }}
        >
          <Box sx={{ width: "60%" }}>
            <Typography
              variant="h4"
              sx={{
                "@media (max-width: 600px)": {
                  fontSize: "1rem",
                },
              }}
            >
              Franco gives you on demand access to the talented pool of top-tier
              developers & designers
            </Typography>
            <StyledButton variant="contained" endIcon={<ArrowRightAlt />}>
              Start 3 day Free Trial
            </StyledButton>
            <Typography sx={{fontSize:'0.7rem',opacity:'0.25'}}>
              No credit card required. Cancel anytime.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FreeTrial;
