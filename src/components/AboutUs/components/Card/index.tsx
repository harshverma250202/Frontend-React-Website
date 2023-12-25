import React from "react";
import { Box, Grid, Typography,Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styled } from '@mui/material/styles';

type Props = {
  buttonName:string,
};

const StyledButton = styled(Button)({
  borderRadius: "30px",
  border:"1px solid #808080",
  background:"transparent",
  display:"flex",
  color:"#808080",
  fontSize:"0.8rem",
  width:"fit-content",
  flexFlow:"wrap",
  margin:"2% 2%",
});


const Card = (props: Props) => {
  return (
    <>
      <Box sx={{ width: "100%", margin: "2vh 0" }}>
        <Grid container sx={{ width: "100%" }}>
          <Grid item xs={12} sm={7}>
            <Box
              sx={{
                // height: "40vh",
                width: "calc(100%-2vw)",
                // border: "1px solid white",
                padding: "2vh 2vw",
              }}
            >
              <Typography variant="h3">
                {props.buttonName} <ArrowForwardIcon sx={{color:"#4282FE"}} />{" "}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Box
              sx={{
                // height: "40vh",
                width: "calc(100%-2vw)",
                // border: "1px solid white",
                padding: "2vh 2vw",
              }}
            >
              <Typography variant="h6" >
              We provide end to end research services while discovering game-changing improvement opportunities.
              </Typography>
              <Box sx={{marginTop:"2vh",display:"flex",flexFlow:"wrap"}}>
                <StyledButton>
                  Mobile&nbsp;App&nbsp;Design
                </StyledButton>
                <StyledButton>
                  Web&nbsp;App&nbsp;Design
                </StyledButton>
                <StyledButton>
                  Design&nbsp;System
                </StyledButton>
              </Box>

            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Card;
