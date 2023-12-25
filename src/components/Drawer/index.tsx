import React from "react";
import { Facebook, LinkedIn, Twitter, YouTube } from "@mui/icons-material";

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
      <Drawer anchor="right" open={props.open}  onClose={() => props.setOpen(false)}>
        <Toolbar sx={{ flexDirection: "row-reverse" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="close"
            onClick={() => props.setOpen(false)}
          >
            <Close />
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
        </List>
        <div>
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
            </div>
      </Drawer>
    </>
  );
};

export default index;
