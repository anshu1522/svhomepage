import {
  AppBar,
  Drawer,
  Toolbar,
  Typography,
  makeStyles,
  MenuItem,
  Button,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import ToggleSwitch from "./ToggleSwitch";
import { Link as RouterLink } from "react-router-dom";
const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#8DBCD0",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    color:"red"
  },
}));
const headersData = [
  {
    label: "Our Courses",
    href: "/listings",
  },
  {
    label: "Programs",
    href: "/programs",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
  {
    label: "Log Out",
    href: "/logout",
  },
];
export default function Header() {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();
  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {suniyaVigyan}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ToggleSwitch />
          {getMenuButtons()}
        </div>
      </Toolbar>
    );
  };
  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
          <div className={drawerContainer}>
            {getDrawerChoices()}
            <ToggleSwitch />
          </div>
        </Drawer>
        <div>{suniyaVigyan}</div>
      </Toolbar>
    );
  };
  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <RouterLink
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </RouterLink>
      );
    });
  };
  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      console.log(label);
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };
  const suniyaVigyan = (
    <Typography variant="h6" component="h1" className={logo}>
      Suniya Vigyan
    </Typography>
  );
  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
