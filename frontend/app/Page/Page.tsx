'use client'

import Home from "./Home/Home";
import About from "./About/About";
import Service from "./Service/Service";
import Resume from "./Resume/Resume";
import Blog from "./Blog/Blog";
import Content from "./Content/Content";
import Portfolio from "./Portfolio/Portfolio";
import { useEffect, useState } from 'react';
import '/app/PhoneNavBar/Style/Style.css'



export default function Page() {
  useEffect(()=>
  {
    const Parrent =  document.getElementById('Parrent');
    if(Parrent)
    {
      Parrent.addEventListener('wheel', handleScroll);
    }
    function handleScroll(event: WheelEvent) {
      const deltaY = event.deltaY;

      if (deltaY > 0 && Parrent)
      {
        Parrent.style.animation = "Scroll_down 3s 1 forwards";
        console.log("down");
      }
      else if (deltaY < 0 && Parrent)
      {
        Parrent.style.animation = "Scroll_up 3s 1 forwards";
        console.log("up");
      }  
    }
  },[]);
  return (
    <div id="Parrent" className="relative w-[100vw] h-[calc(750px*7)]">
        <About/>
        <Home/>
        <Service/>
        <Portfolio/>
        <Resume/>
        <Blog/>
        <Content/>
    </div>
  )
}
