'use client'


import { useContext } from 'react';
import '../../Page/Style/Style.css'
import { FloorContextType, GetFloorContext } from '@/app/PageContext';
import { Data } from '../../page';


export const GoTo = (Target:number):number =>
{
  const Parrent =  document.getElementById('Parrent');

  if(Parrent)
    Parrent.style.animation = `GoTo_${Target} 0s 1 forwards`;
  return(Target);
}

export default function Parts() {
  return (
    <div className="relative hidden sm:flex space-x-[2.5vw] my-auto  mx-auto">
      <button onClick={()=>{Data.SetFloor(GoTo(1));}} id="page_flore_1" className="relative text-[#FC033D] text-[10px] sm:text-xs md:text-sm lg:text-base">
        HOME
      </button>
      <button onClick={()=>{Data.SetFloor(GoTo(2));}} id="page_flore_2" className="relative text-[10px] sm:text-xs md:text-sm lg:text-base">
        ABOUT
      </button>
      {/* <div id="page_flore_3" className="relative text-[10px] sm:text-xs md:text-sm lg:text-base">
        SERVICE
      </div> */}
      <button onClick={()=>{Data.SetFloor(GoTo(3));}} id="page_flore_3" className="relative text-[10px] sm:text-xs md:text-sm lg:text-base">
        SKILLS
      </button>
      <button onClick={()=>{Data.SetFloor(GoTo(4));}} id="page_flore_4" className="relative text-[10px] sm:text-xs md:text-sm lg:text-base">
        CONTACT
      </button>
    </div>
  )
}
