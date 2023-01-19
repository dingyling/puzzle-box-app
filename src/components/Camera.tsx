import { useCallback, useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function Camera() {

  return (
    <div >
      <iframe id="serviceFrameSend" src="camera.html" className='w-full' height={1000} />
    </div>
  );
}

export default Camera;
