import { useEffect, useState, useRef } from "react";

//imports for react 18.x
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import CustomDrawer from "../Drawer";
// import Hamburger from "../../assets/images/hamburger.png";
// import ToCloseHamburger from "../../assets/images/toCloseHamburger.png";
// import Polygon from "../../assets/images/Polygon.png";
// import classes from "./Navbar.module.css";
// import Logo from "../../assets/images/navbarlogo.png";
import MenuIcon from '@mui/icons-material/Menu';
function MobileNavbar() {
  const [open, setOpen] = useState(false);

  const linkObj = [
    {
      name: "Team",
      onClick: () => {
        setOpen(false);
      },
      
    },
    {
      name: "Our Services",
      onClick: () => {
        setOpen(false);
      },
      
    },    {
      name: "Work",
      onClick: () => {
        setOpen(false);
      },
      
    },    {
      name: "RFDD",
      onClick: () => {
        setOpen(false);
      },
      
    },    {
      name: "Blogs",
      onClick: () => {
        setOpen(false);
      },
      
    },    {
      name: "Contact",
      onClick: () => {
        setOpen(false);
      },
      
    },

  ];

  return (
    <>
        <AppBar sx={{ boxShadow: "none" }} position="fixed" color="transparent">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton
              edge="start"
            //   color="transparent"
              aria-label="menu"
            //   onClick={() => {
            //     dispatch(navigateTo("/"));
            //   }}
            color="inherit"
            >
                LOGO
            </IconButton>
            <IconButton
              edge="end"
            //   color="transparent"
              aria-label="menu"
              onClick={() => setOpen(true)}
              color="inherit"
            >
              {/* <img src={Hamburger} alt="hamburger" /> */}
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <CustomDrawer open={open} setOpen={setOpen} linkObj={linkObj}/>


    </>
  );
}

export default MobileNavbar;
