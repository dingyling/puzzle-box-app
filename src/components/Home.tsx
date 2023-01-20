import { useCallback, useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function Home() {


  return (
    <div >
      <div className='flex flex-col items-center p-10'>
       <div className='text-xl'>Heisann!</div>
       <br/>
       <div>Jaså, så du har lyst til å komme deg inn i denne kassa? Jaja, det er bare å prøve! Det kan hende at du kommer til å trenge noen "verktøy" som du finner
         på dette nettstedet. Du finner dem i menyen på toppen av siden. Men det kan selvsagt ikke være så enkelt, først må du finne passordene for å låse opp verktøyene!
         Lykke til!
       </div>
      </div>
    </div>
  );
}

export default Home;
