import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import NfcIcon from '@mui/icons-material/Nfc';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

export default function Header() {

      return (
            <Box sx={{ flexGrow: 1 }}>
                  <AppBar position="static">
                        <Toolbar>
                              <Link to={"/"}>
                                    <IconButton
                                          size="large"
                                          edge="start"
                                          color="inherit"
                                          aria-label="menu"
                                          sx={{ mr: 2 }}
                                    >
                                          <HomeIcon />
                                    </IconButton>
                              </Link>
                              <Link to={"/scan"}>
                                    <IconButton
                                          size="large"
                                          edge="start"
                                          color="inherit"
                                          aria-label="menu"
                                          sx={{ mr: 2 }}
                                    >
                                          <NfcIcon />
                                    </IconButton>
                              </Link>
                              <Link to={"/camera"}>
                                    <IconButton
                                          size="large"
                                          edge="start"
                                          color="inherit"
                                          aria-label="menu"
                                          sx={{ mr: 2 }}
                                    >
                                          <CameraAltIcon />
                                    </IconButton>
                              </Link>
                        </Toolbar>
                  </AppBar>
            </Box>
      );
}