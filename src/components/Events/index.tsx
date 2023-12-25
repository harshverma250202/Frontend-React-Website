import React from "react";
import {Container,Box, Button} from "@mui/material";
import EventImage from "../../assets/images/Events.png";

type Props = {};

const Events = (props: Props) => {
  return (
    <>
    < Box sx={{
        display: "flex",
        position: "relative",
    }}>
        <img src={EventImage} alt="Events" style={{width: "100%"}}/>
            <Button
          variant="contained"
          sx={{
            position:'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: "30px",
            background:
              "linear-gradient(90deg, #42D7F8 0%, #4282FE 65.1%, #3A40FB 100%)",
            width: "fit-content",
            padding: "1.5vh 2vw",
          }}
        >
          Watch Showrell
        </Button>

    </Box>

    </>
  );
};

export default Events;
