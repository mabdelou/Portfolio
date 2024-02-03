'use client'

import Home from "./Home/Home";
import About from "./About/About";
import Service from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import { useEffect, useState,useContext } from 'react';
import { FloorContextType, GetFloorContext } from '@/app/PageContext';
import '/app/Page/Style/Style.css'
import { Data } from "../page";


let val=0;
const fun = (): void =>
{
  if (typeof document === 'undefined')
    return; 
  
  let isAnimating = false;
  const Parrent =  document.getElementById('Parrent');
  if(!Parrent)
      return;

  Parrent.addEventListener('wheel', handleScroll);
  function handleScroll(event: WheelEvent)
  {
    
    if(isAnimating)
      return ;
  
    const deltaY = event.deltaY;
    if (deltaY > 0 && Data.Floor < 4)
    {
      console.log(Data.Floor);
      startAnimation(`Scroll_down_${Data.Floor} 3s 1 forwards`);
      Data.SetFloor(++Data.Floor);
    }
    else if (deltaY < 0 && Data.Floor > 0)
    {
      console.log(Data.Floor);
      startAnimation(`Scroll_up_${Data.Floor} 3s 1 forwards`);
      Data.SetFloor(--Data.Floor);
    }
  }

  function startAnimation(animationName: string)
  {
    if(!Parrent)
      return;

    isAnimating = true;
    Parrent.style.animation = animationName;
    Parrent.addEventListener('animationend', AnimationEnded);
  }
  
  function AnimationEnded()
  {
    if(!Parrent)
      return;

    isAnimating = false;
    Parrent.removeEventListener('animationend', AnimationEnded);
  }
}

export default function Main()
{
  if(++val < 2)
    fun();
  return (
    <div id="Parrent" className="relative w-[100vw] h-[400vh]">
        <Home/>
        <About/>
        {/* <Service/> */}
        <Skills/>
        <Contact/>
    </div>
  )
}
