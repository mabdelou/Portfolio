'use client'

import { useEffect } from 'react';
import '../Style/Style.css'


export default function Home() {

  useEffect(()=>
  {
    let elem = 0;
    let isAnimating = false;
    const Parrent =  document.getElementById('home_scroll');
    const interval = setInterval(()=>
    {
      if(isAnimating)
        return ;
      startAnimation(`Scroll_${elem++ % 3} 1.5s 1 forwards`);
      for(let a=0;a<3;a++)
      {
        const b = document.getElementById(`home_circle_${a+1}`);

        if(b && a == 2-(elem % 3))
        {
          b.style.scale = "1.5";
          b.style.background = "#FC033D";
        }
        else if(b)
        {
          b.style.scale = "1";
          b.style.background = "#666666";
        }
      }
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
    <div id="Home" className="relative ">
      <div id="home_scroll" className="relative flex w-[300vw] h-[calc(100vh-50px)] mt-[50px] ml-[-200vw]  bg-[#E5ECF1]">
        <div className="relative bg-center bg-no-repeat bg-cover  bg-[url('/photo/photo_of_programmer_no_color.jpeg')] w-[100vw] h-[calc(100vh-50px)]">
          <p className="absolute opacity-65 text-black right-1/2 top-1/2  transform -translate-y-1/2  translate-x-1/2  text-[50px] sm:text-[75px] md:text-[100px] lg:text-[125px] xl:text-[150px] 2xl:text-[150px] font-black">
            مبرمج
          </p>
        </div>
        <div className="relative bg-center bg-no-repeat bg-cover  bg-[url('/photo/photo_of_devleoper_no_color.png')] w-[100vw] h-[calc(100vh-50px)]">
          <p className="absolute opacity-65 text-black right-1/2 top-1/2  transform -translate-y-1/2  translate-x-1/2 text-[50px] sm:text-[75px] md:text-[100px] lg:text-[125px] xl:text-[150px] 2xl:text-[150px] font-black">
            مطور
          </p>
        </div>
        <div className="relative bg-center bg-no-repeat bg-cover  bg-[url('/photo/photo_of_designer_no_color.png')] w-[100vw] h-[calc(100vh-50px)]">
          <p className="absolute opacity-65 text-black right-1/2 top-1/2  transform -translate-y-1/2  translate-x-1/2 text-[50px] sm:text-[75px] md:text-[100px] lg:text-[125px] xl:text-[150px] 2xl:text-[150px] font-black">
            مصمم
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 flex items-center justify-center space-x-[50px] mx-auto w-[100vw] h-[50px]">
        <div id="home_circle_1" className="relative w-[10px] h-[10px] bg-[#666666] rounded-3xl"></div>
        <div id="home_circle_2" className="relative w-[10px] h-[10px] bg-[#666666] rounded-3xl"></div>
        <div id="home_circle_3" className="relative w-[10px] h-[10px] bg-[#FC033D] rounded-3xl"></div>
      </div>
    </div>
  )
}
