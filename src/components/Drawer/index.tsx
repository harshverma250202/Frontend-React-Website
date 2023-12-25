import React from "react";
import { Facebook, LinkedIn, Twitter, YouTube } from "@mui/icons-material";

import {
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemText,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { Menu, Close } from "@mui/icons-material";

type Props = {
  linkObj: {
    name: string;
    onClick: () => void;
  }[];
  open: boolean;
  setOpen: (open: boolean) => void;
};
const styles = {};

const index = (props: Props) => {
  return (
    <>
      <Drawer
        anchor="right"
        open={props.open}
        onClose={() => props.setOpen(false)}
        PaperProps={{
          sx: {
            background: "black",
            color: "white",
            width: "40vw",
            "@media (max-width: 600px)": {
              width: "100vw",
            },
            postion: "relative",
          },
        }}
      >
        <Toolbar sx={{ justifyContent:"space-between" }}>
        <Box >LOGO</Box>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="close"
            onClick={() => props.setOpen(false)}
            sx={{display:"flex"}}
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
          <ListItem alignItems="center">
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
          </ListItem>
        </List>
        <div></div>
      </Drawer>
    </>
  );
};

export default index;
