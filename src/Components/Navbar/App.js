import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "primary.main",
          borderRadius: 5,
          height: 90,
          boxShadow: isMobile ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none",
          marginY: "2rem",
        }}
      >
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                My Website
              </Typography>
            </>
          ) : (
            <Grid container>
              <Grid item xs={2}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Home
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Skills
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Education
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Experience
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Projects
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Achievements
                </Typography>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
      {isMobile && menuOpen && (
        <Box
          sx={{
            pt: 10,
            textAlign: "center",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "1.5rem",
          }}
        >
          <Grid container spacing={2} justifyContent="space-around">
            <Grid item xs={12}>
              <Button color="inherit">Home</Button>
            </Grid>
            <Grid item xs={12}>
              <Button color="inherit">Achievements</Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
