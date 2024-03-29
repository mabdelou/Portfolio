'use client'

import { useEffect, useState } from 'react';
import DisplaySNB from "./DisplaySNB/DisplaySNB";
import ShortNavBar, {Close} from "./ShortNavBar/ShortNavBar";
import './Style/Style.css'

export default function PhoneNavBar() {
  // const [NumberOfRenders, setNumberOfRenders] = useState<number>(0);
  useEffect(()=>
  {
    const interval = setInterval(()=>{
      const ShortNavBarID = document.getElementById('ShortNavBarID');
      if(window.innerWidth >= 640 && ShortNavBarID)
        Close();
    },500);
    return ()=>
    {
      clearInterval(interval);
    }
  },[]);
  return (
      <div className="">
        <DisplaySNB/>
        <div id="ShortNavBarID" className="fixed hidden w-[100px] h-[100vh] bg-[#CCCCCC] top-[50px] rounded-tr-lg z-40">
          <ShortNavBar/>
        </div>
      </div>
    )
  }
  