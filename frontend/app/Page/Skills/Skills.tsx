'use client'

import { useEffect } from 'react';
import '/app/Page/Style/Style.css'

export default function Skills() {

  useEffect(()=>
  {
    let elem = 0;
    let isAnimating = false;
    const Parrent =  document.getElementById('skill_scroll');
    const interval = setInterval(()=>
    {
      if(isAnimating)
        return ;
      startAnimation(`skills_Scroll 13s linear infinite`);
    },3000);
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
    <div className="relative ">
      <div id="skill_scroll" className="relative flex w-[calc(400px*13)] h-[100vh] bg-[#E5ECF1]">
        <div id="skill_partI" className="relative flex w-[calc(400px*13)] h-[100vh]">
          <img src="/logo/1.png" className='relative w-[400px] h-[200px] top-1/2 transform -translate-y-1/2'/>
          <img src="/logo/2.png" className='relative w-[400px] h-[200px] top-1/2 transform -translate-y-1/2'/>
          <img src="/logo/3.png" className='relative w-[400px] h-[200px] top-1/2 transform -translate-y-1/2'/>
          <img src="/logo/4.png" className='relative w-[400px] h-[200px] top-1/2 transform -translate-y-1/2'/>
          <img src="/logo/5.png" className='relative w-[400px] h-[200px] top-1/2 transform -translate-y-1/2'/>
          <img src="/logo/6.png" className='relative w-[400px] h-[200px] top-1/2 transform -translate-y-1/2'/>
          <img src="/logo/7.png" className='relative w-[400px] h-[200px] top-1/2 transform -translate-y-1/2'/>
          <img src="/logo/8.png" className='relative w-[400px] h-[200px] top-1/2 transform -translate-y-1/2'/>
          <img src="/logo/9.png" className='relative w-[400px] h-[200px] top-1/2 transform -translate-y-1/2'/>
          <img src="/logo/10.png" className='relative w-[400px] h-[200px] top-1/2 transform -translate-y-1/2'/>
          <img src="/logo/11.png" className='relative w-[400px] h-[200px] top-1/2 transform -translate-y-1/2'/>
          <img src="/logo/12.png" className='relative w-[400px] h-[200px] top-1/2 transform -translate-y-1/2'/>
          <img src="/logo/13.png" className='relative w-[400px] h-[200px] top-1/2 transform -translate-y-1/2'/>
        </div>
      </div>
    </div>
  )
}
