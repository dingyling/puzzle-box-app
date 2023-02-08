import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import NfcIcon from '@mui/icons-material/Nfc';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useLocation } from "react-router-dom";

export default function Header() {

	const location = useLocation();

      const getLocation = () => {
            switch (location.pathname) {
                  case "/": 
                        return "Hjem";
                  case "/camera": 
                        return "Kamera";
                  case "/scan":
                        return "Skanner"; 
            }
      }

      return (
            <Box sx={{ flexGrow: 1 }}>
                  <AppBar position="static">
                        <Toolbar>
                              <Link to={"/"}>
                                    <IconButton
                                          // size="large"
                                          edge="start"
                                          color="inherit"
                                          aria-label="menu"
                                          sx={{ width: 100 }}
                                    >
                                          <HomeIcon />
                                    </IconButton>
                              </Link>
                              <div className='flex ml-auto pr-5'>{getLocation()}</div>
                        </Toolbar>
                  </AppBar>
            </Box>
      );
}