import React from "react";
import {Container,Box, Button} from "@mui/material";
import EventImage from "../../assets/images/Events.png";

type Props = {};

const Events = (props: Props) => {
  return (
    <>
      {/* <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0", // Default margin for mobile

          "@media (min-width: 600px)": {
            margin: "0 10%", // Margin for desktop and larger screens
          },
        }}
      >
        hemlo
      </Container> */}

    < Box sx={{
        display: "flex",
        position: "relative",
    }}>
        <img src={EventImage} alt="Events" style={{width: "100%"}}/>
        <Button sx={{
            position:'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
    
    
    
    }}  color='inherit'>View All</Button>

    </Box>

    </>
  );
};

export default Events;
