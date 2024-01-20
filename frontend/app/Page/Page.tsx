'use client'

import Home from "./Home/Home";
import About from "./About/About";
import Service from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import { useEffect, useState } from 'react';
import '/app/Page/Style/Style.css'



export default function Page() {
  useEffect(()=>
  {
    let floor = 0;
    let isAnimating = false;
    const Parrent =  document.getElementById('Parrent');

    if(Parrent)
      Parrent.addEventListener('wheel', handleScroll);
    function handleScroll(event: WheelEvent)
    {
      const deltaY = event.deltaY;

      if(isAnimating)
        return ;

      if (deltaY > 0 && Parrent && floor < 4)
      {
        floor++;
        startAnimation(`Scroll_down_${floor} 3s 1 forwards`);
        console.log("down "+floor);
      }
      else if (deltaY < 0 && Parrent && floor > 0)
      {
        startAnimation(`Scroll_up_${floor} 3s 1 forwards`);
        console.log("up "+floor);
        floor--;
      }
      for(let a=0;a<4;a++)
      {
        const b = document.getElementById(`page_flore_${a+1}`);
        const b1 = document.getElementById(`page_flore_s${a+1}`);
        if(b && b1 && a == floor)
        {
          b.style.color = "#FC033D";
          b1.style.color = "#FC033D";
        }
        else if(b && b1)
        {
          b.style.color = "#666666";
          b1.style.color = "#666666";
        }  
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
  },[]);
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
