import { useCallback, useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function Home() {


  return (
    <div >
      <div className='flex flex-col items-center p-10'>
        <div className='text-xl'>Heisann!</div>
        <br />
        <div className='mb-2'>
          Velkommen til <b>EzScape 0.1</b>. Dette eksperimentelle nettstedet inneholder verktøy for å bryte seg inn i trekasser låst med hengelåser og annet faenskap. Hvis du ikke har en trekasse foran deg anbefaler jeg at du finner på noe annet.
        </div>
        <div className='mb-4'>
          Verktøyene du trenger for å åpne kassa finner du i menyen på toppen av siden, men før du kan bruke dem må du låse dem opp. Passordene består av 6-sifrede tallkoder.
        </div>
        <div>
          Lykke til!
        </div>
      </div>
    </div >
  );
}

export default Home;
