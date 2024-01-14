'use client'

import { useEffect, useState } from 'react';

import DisplaySNB from "./DisplaySNB/DisplaySNB";
import ShortNavBar from "./ShortNavBar/ShortNavBar";

export default function PhoneNavBar() {
  // const [NumberOfRenders, setNumberOfRenders] = useState<number>(0);
  useEffect(()=>
  {
    const interval = setInterval(()=>{
      const ShortNavBarID = document.getElementById('ShortNavBarID');
      const DisplaySNB = document.getElementById('DisplaySNB');
      if(window.innerWidth >= 640 && ShortNavBarID && DisplaySNB)
      {
        ShortNavBarID.style.display = "none";
        DisplaySNB.style.right = "0px";
      }
    },250);
    return ()=>
    {
      clearInterval(interval);
    }
  },[]);
  return (
      <div>
        <DisplaySNB/>
        <div id="ShortNavBarID" className="fixed hidden w-[100px] h-[100vh] bg-[#CCCCCC] top-[50px] right-[0px] z-40">
          <ShortNavBar/>
        </div>
      </div>
    )
  }
  