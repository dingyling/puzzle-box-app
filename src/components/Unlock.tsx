import { useCallback, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface Props {
  password: string;
  localStorageItem: string;
  setUnlocked: any;
}

function Unlock({password, localStorageItem, setUnlocked}: Props) {

  const [pass, setPass] = useState("");
  const [err, setErr] = useState(false);

  const tryUnlock = () => {
    if (pass === password) {
      localStorage.setItem(localStorageItem, "unlocked");
      setUnlocked(true);
    } else {
      setErr(true);
      setTimeout(() => {
        setErr(false);
      }, 3000)
    }
  }

  return (
    <div className='flex p-10 flex-col m-auto'>
      <TextField
        id="outlined-password-input"
        label="Passord"
        // type="password"
        onChange={(event) => {setPass(event.target.value)}}
        value={pass}
      />
      <div className='pt-4'>
        <Button onClick={() => {tryUnlock()}} variant="contained">Lås opp</Button>
      </div>
      {err && <div className='text-red-600 p-4'>Feil passord, prøv igjen...</div>}
    </div>
  );
}

export default Unlock;
