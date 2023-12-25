import {  useState, } from "react";

//imports for react 18.x
import {
  AppBar,
  Toolbar,
  IconButton,

} from "@mui/material";
import CustomDrawer from "../Drawer";

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
              aria-label="menu"
            color="inherit"
            >
                LOGO
            </IconButton>
            <IconButton
              edge="end"
              aria-label="menu"
              onClick={() => setOpen(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <CustomDrawer open={open} setOpen={setOpen} linkObj={linkObj}/>


    </>
  );
}

export default MobileNavbar;
