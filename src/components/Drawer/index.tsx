import React from "react";
import {

    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItemText,
    ListItemButton,
  } from "@mui/material";
  import { Menu, Close } from "@mui/icons-material";

type Props = {
  linkObj:  {
        name: string;
        onClick: () => void;
    }[],
    open: boolean,
    setOpen: (open: boolean) => void;
};

const index = (props: Props) => {
  return (
    <>
      <Drawer anchor="right" open={props.open} onClose={() => props.setOpen(false)}>
        <Toolbar sx={{ flexDirection: "row-reverse" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="close"
            onClick={() => props.setOpen(false)}
          >
            {/* <img src={ToCloseHamburger} alt="hamburger" /> */}
          </IconButton>
        </Toolbar>

        <List sx={{ margin: "auto", padding: "5vh 0" }}>
          {props.linkObj.map((item, index) => (
            <ListItemButton
              alignItems="center"
              key={item.name}
              onClick={item.onClick}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          ))}
          <ListItemButton
            alignItems="center"
            key="ABOUT US"
            onClick={() => {
              props.setOpen(false);
              // dispatch(setElementRef("aboutUsId", "homepage"));
              // dispatch(scrollElementIntoView());
            }}
          >
            <ListItemText sx={{ color: "white" }} primary="ABOUT US" />
          </ListItemButton>
          <ListItemButton
            alignItems="center"
            key="PERFORM"
            sx={{ position: "relative", marginTop: "5vh" }}
            onClick={() => {
              props.setOpen(false);
              // dispatch(setElementRef("upcomingEventId", "homepage"));
              // dispatch(scrollElementIntoView());
            }}
          >
            <ListItemText sx={{ color: "white" }} primary="PERFORM" />
            {/* <img
                src={Polygon}
                alt="polygon"
                className={classes.performImage}
              /> */}
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};

export default index;
