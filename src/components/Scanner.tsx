import { useCallback, useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Unlock from './Unlock';

function Scanner() {
  const localStorageItem = "643251";

  const [message, setMessage] = useState("");
  const [unlocked, setUnlocked] = useState(localStorage.getItem(localStorageItem) !== null);

  const getMessageContent = (mes: string[]) => {
    switch (mes[0]) {
      case "C":
        return `https://deckofcardsapi.com/static/img/${mes[1]}.png`
      case "S":
        const img = require(`../images/${mes[1]}.png`);
        return img;
      default:
        return "";
      // TODO: Handle other records with record data.
    }
  }

  const scan = useCallback(async () => {
    // setMessage(window.NDEFReader);
    if ('NDEFReader' in window) {
      const windoww: any = window;
      try {
        const ndef = new windoww.NDEFReader();
        await ndef.scan();

        console.log("Scan started successfully.");
        ndef.onreadingerror = () => {
          console.log("Cannot read data from the NFC tag. Try another one?");
        };

        ndef.onreading = (event: any) => {
          console.log("NDEF message read.");
          onReading(event);
        };

      } catch (error) {
        setMessage("Error")
      };
    }
  }, [setMessage]);

  const onReading = ({ message, serialNumber }: any) => {
    for (const record of message.records) {
      switch (record.recordType) {
        case "text":
          const textDecoder = new TextDecoder(record.encoding);
          const mes = textDecoder.decode(record.data).split(":");

          setMessage(getMessageContent(mes));
          break;
        case "url":
          // TODO: Read URL record with record data.
          break;
        default:
        // TODO: Handle other records with record data.
      }
    }
  };


  useEffect(() => {
    scan();
  }, [scan]);

  if (!unlocked) {
    return (
      <Unlock
        password="scanpassord"
        localStorageItem={localStorageItem}
        setUnlocked={setUnlocked}
      />
    );
  }

  if (message === "") {
    return (
      <div className='flex flex-col items-center p-10'>
        <CircularProgress />
        <div className='p-4'>
          Venter på skanning...
        </div>
      </div>
    )
  }

  return (
    <div >
      <div className='flex flex-col items-center p-10'>
        <img src={message} />
      </div>
    </div>
  );
}

export default Scanner;
