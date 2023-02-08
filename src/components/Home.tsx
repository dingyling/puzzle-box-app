import { useCallback, useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import NfcIcon from '@mui/icons-material/Nfc';
import { Link } from "react-router-dom";

function Home() {

  return (
    <div >
      <div className='flex flex-row items-center justify-center p-10'>
        <Link to={"/camera"}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{padding: "20px", margin: "20px", backgroundColor: "#1976d2", color: "white"}}
          >
            <CameraAltIcon  sx={{fontSize: "56px"}} />
          </IconButton>
        </Link>
        <Link to={"/scan"}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{padding: "20px", margin: "20px", backgroundColor: "#1976d2", color: "white"}}
          >
            <NfcIcon sx={{fontSize: "56px"}} />
          </IconButton>
        </Link>
      </div>
    </div >
  );
}

export default Home;
