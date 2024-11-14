import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";

const pages = ["Home", "Aboute", "Contect"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

// this  code link is

// https://mui.com/material-ui/react-app-bar/#system-ResponsiveAppBar.js

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (anchorEl) => {
    console.log(anchorEl.target.innerText);

    if (anchorEl.target.innerText === "Home") {
      navigate("/");
    }
    if (anchorEl.target.innerText === "Aboute") {
      navigate("/Aboute");
    }
    if (anchorEl.target.innerText === "Contect") {
      navigate("/Contect");
    }

    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const [Data, setData] = React.useState(null);

  const handleCloseUserMenu = (anchorEl) => {
    console.log(anchorEl.target.innerHTML);

    if (anchorEl.target.innerHTML === "Profile") {
      navigate("/Aboute");
    }
    if (anchorEl.target.innerHTML === "Account") {
      navigate("/Contect");
    }
    if (anchorEl.target.innerHTML === "Dashboard") {
      navigate("/Weather");
    }
    if (anchorEl.target.innerHTML === "Logout") {
      navigate("/");
    }

    setAnchorElUser(null);
  };


  const handleClick = (e) => {
    console.log(e.target.innerText,"innerText");

    if (e.target.innerText === "HOME") {
      navigate("/");
    }
    if (e.target.innerText === "ABOUTE") {
      navigate("/Aboute");
    }
    if (e.target.innerText === "CONTECT") {
      navigate("/Contect");
    }

    setAnchorElNav(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* //================logo=================== */}
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Tooltip title="Open settings">
            <IconButton sx={{ p: 0, mr: "5px" }}>
              <Avatar alt="Remy Sharp" src="/logo01-1.png" />
            </IconButton>
          </Tooltip>
          {/* //================logo=================== */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ALFA CONSULTANT
          </Typography>
          {/* //================responsive-menu-IconButton=================== */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* //================responsive-menu-AdbIcon- logo=================== */}
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          {/* <Tooltip title="Open settings">
              <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/public/logo01-1.png" />
              </IconButton>
            </Tooltip> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 400,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            ALFA CONSULTANT
          </Typography>

          {/* //================responsive-menu-Button=================== */}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleClick}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
           
          </Box>

          {/* //================Avatar=================== */}
          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/photo.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
