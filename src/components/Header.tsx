import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import NfcIcon from '@mui/icons-material/Nfc';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Link } from "react-router-dom";

export default function Header() {
      const [isOpen, setIsOpen] = React.useState(false);

      return (
            <Box sx={{ flexGrow: 1 }}>
                  <AppBar position="static">
                        <Toolbar>
                              <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                    onClick={() => setIsOpen(true)}
                              >
                                    <MenuIcon />
                              </IconButton>
                        </Toolbar>
                        <Drawer
                              anchor='left'
                              open={isOpen}
                              onClose={() => setIsOpen(false)}
                        >
                              <Box
                                    // sx={{ width: 250 }}
                                    role="presentation"
                              >
                                    <List>
                                          <ListItem key={"scan"} disablePadding>
                                                <Link to={"/scan"}>
                                                      <ListItemButton>
                                                            <ListItemIcon>
                                                                  <NfcIcon />
                                                            </ListItemIcon>
                                                            <ListItemText primary={"Skann"} />
                                                      </ListItemButton>
                                                </Link>
                                          </ListItem>
                                          <ListItem key={"cam"} disablePadding>
                                                <Link to={"/camera"}>
                                                      <ListItemButton>
                                                            <ListItemIcon>
                                                                  <CameraAltIcon />
                                                            </ListItemIcon>
                                                            <ListItemText primary={"Kamera"} />
                                                      </ListItemButton>
                                                </Link>
                                          </ListItem>
                                          <ListItem key={"sig"} disablePadding>
                                                <Link to={"/signal"}>
                                                      <ListItemButton>
                                                            <ListItemIcon>
                                                                  <QuestionMarkIcon />
                                                            </ListItemIcon>
                                                            <ListItemText primary={"Kamera"} />
                                                      </ListItemButton>
                                                </Link>
                                          </ListItem>
                                    </List>
                              </Box>
                        </Drawer>
                  </AppBar>
            </Box>
      );
}