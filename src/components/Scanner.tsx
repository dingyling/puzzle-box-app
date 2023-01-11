import { useCallback, useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function Scanner() {

  const [message, setMessage] = useState("");

  const getMessageContent = (mes: string[]) => {
    switch (mes[0]) {
      case "C":
        return `https://deckofcardsapi.com/static/img/${mes[1]}.png`
      case "B":
        // TODO: Read URL record with record data.
        return "";
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

  if (message === "") {
    return (
      <div className='flex flex-col items-center '>
        <CircularProgress />
        <div className='p-4'>
          Venter på skanning...
        </div>
      </div>
    )
  }

  return (
    <div >
      <div className='flex flex-col items-center '>
        <img src={message} />
      </div>
    </div>
  );
}

export default Scanner;
