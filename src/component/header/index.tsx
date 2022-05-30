import React,{FunctionComponent} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";

const Header : FunctionComponent<HeaderProps>= ({ mode, setMode }) => {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "background.color", boxShadow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, ml: 6 }}>
            Where in the world?
          </Typography>
          {mode === "light" ? <LightModeIcon /> : <ModeNightIcon />}
          <Button color="inherit" onClick={setMode} sx={{ mr: 6 }}>
            {mode === "light" ? "Dark Mode" : "light Mode"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

interface HeaderProps{
  mode:string
  setMode : (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default Header;
