'use client'


import { useContext } from 'react';
import '/app/Page/Style/Style.css'
import { FloorContextType, GetFloorContext, PageContext } from '@/app/page';


const GoTo = (Target:number):number =>
{
  const Parrent =  document.getElementById('Parrent');

  if(Parrent)
    Parrent.style.animation = `GoTo_${Target} 0s 1 forwards`;
  return(Target-1);
}

export default function Parts() {
  let Data:FloorContextType = GetFloorContext();

  return (
    <div className="relative hidden sm:flex space-x-[2.5vw] my-auto  mx-auto">
      {/* <a href="#Home" id="page_flore_1" className="relative text-[#FC033D] text-[10px] sm:text-xs md:text-sm lg:text-base">
        HOME
      </a> */}
      <button onClick={()=>{Data.setFloor(GoTo(1));}} id="page_flore_1" className="relative text-[#FC033D] text-[10px] sm:text-xs md:text-sm lg:text-base">
        HOME
      </button>
      <button onClick={()=>{Data.setFloor(GoTo(2));}} id="page_flore_2" className="relative text-[10px] sm:text-xs md:text-sm lg:text-base">
        ABOUT
      </button>
      {/* <div id="page_flore_3" className="relative text-[10px] sm:text-xs md:text-sm lg:text-base">
        SERVICE
      </div> */}
      <button onClick={()=>{Data.setFloor(GoTo(3));}} id="page_flore_3" className="relative text-[10px] sm:text-xs md:text-sm lg:text-base">
        SKILLS
      </button>
      <button onClick={()=>{Data.setFloor(GoTo(4));}} id="page_flore_4" className="relative text-[10px] sm:text-xs md:text-sm lg:text-base">
        CONTACT
      </button>
    </div>
  )
}
