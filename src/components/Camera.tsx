import { useCallback, useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Unlock from './Unlock';

function Camera() {

  const localStorageItem = "cameraUnlocked";

  const [unlocked, setUnlocked] = useState(localStorage.getItem(localStorageItem) !== null);

  if (!unlocked) {
    return (
      <Unlock
        password="78963124"
        localStorageItem={localStorageItem}
        setUnlocked={setUnlocked}
      />
    );
  }

  return (
    <div >
      <iframe id="serviceFrameSend" src="cameraMode.html" className='w-full' height={1000} />
    </div>
  );
}

export default Camera;
