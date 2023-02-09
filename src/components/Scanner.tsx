import { useCallback, useEffect, useState, useRef } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Unlock from './Unlock';

function Scanner() {
  const localStorageItem = "scanUnlocked";

  const stickersScanned = useRef<string[]>([]);
  const scanInit = useRef(false);

  const [imgSrc, setImgSrc] = useState("");
  const [unlocked, setUnlocked] = useState(localStorage.getItem(localStorageItem) !== null);

  const getImgSrc = (mes: string[]) => {
    switch (mes[0]) {
      case "C":
        stickersScanned.current = []; // Reset sticker count
        const card = require(`../images/card${mes[1]}.png`);
        setImgSrc(card);
        break;
      case "S":
        stickersScanned.current = []; // Reset sticker count
        const symbol = require(`../images/${mes[1]}.png`);
        setImgSrc(symbol);
        break;
      case "G":
        // Special case: Check for sticker numbering
        if (!stickersScanned.current.includes(mes[1])) {
          stickersScanned.current = [...stickersScanned.current, mes[1]];
          const length = stickersScanned.current.length;
          const image = require(`../images/paper${length}.gif`);

          var imgPreloader = new Image();
          // define onload (= image loaded)
          imgPreloader.onload = function () {
            setImgSrc(imgPreloader.src);
          };
          // set image source
          imgPreloader.src = image;
        } else {
          // Basically set image as same image
          const length = stickersScanned.current.length;
          const image = require(`../images/paper${length}.gif`);
          setImgSrc(image);
        }
        break;
      default:
        break;
      // TODO: Handle other records with record data.
    }
  }

  const scan = useCallback(async () => {
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
        setImgSrc("Error")
      };
    }
  }, [setImgSrc]);

  const onReading = ({ message, serialNumber }: any) => {
    for (const record of message.records) {
      switch (record.recordType) {
        case "text":
          const textDecoder = new TextDecoder(record.encoding);
          const mes = textDecoder.decode(record.data).split(":");

          getImgSrc(mes);
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
    if (!scanInit.current) {
      scan();
      scanInit.current = true;
    }
  }, []);

  if (!unlocked) {
    return (
      <Unlock
        password="643251"
        localStorageItem={localStorageItem}
        setUnlocked={setUnlocked}
      />
    );
  }

  if (imgSrc === "") {
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
        <img src={imgSrc} loading="lazy"/>
        {stickersScanned.current.length > 0 &&
          <div>Skannet {stickersScanned.current.length} av 4</div>
        }
      </div>
    </div>
  );
}

export default Scanner;
