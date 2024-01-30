'use client'


// import {SetFloor} from '@/app/Page/Page';
import '/app/Page/Style/Style.css'
let target:number = 0;

const GoTo = (Target:number) =>
{
  target = Target;
  // SetFloor(target);
  const Parrent =  document.getElementById('Parrent');
  if(Parrent)
    Parrent.style.animation = `GoTo_${Target} 0s 1 forwards`;
}

export default function Parts() {
  return (
    <div className="relative hidden sm:flex space-x-[2.5vw] my-auto  mx-auto">
      {/* <a href="#Home" id="page_flore_1" className="relative text-[#FC033D] text-[10px] sm:text-xs md:text-sm lg:text-base">
        HOME
      </a> */}
      <button onClick={()=>{GoTo(1);}} id="page_flore_1" className="relative text-[#FC033D] text-[10px] sm:text-xs md:text-sm lg:text-base">
        HOME
      </button>
      <button onClick={()=>{GoTo(2);}} id="page_flore_2" className="relative text-[10px] sm:text-xs md:text-sm lg:text-base">
        ABOUT
      </button>
      {/* <div id="page_flore_3" className="relative text-[10px] sm:text-xs md:text-sm lg:text-base">
        SERVICE
      </div> */}
      <button onClick={()=>{GoTo(3);}} id="page_flore_3" className="relative text-[10px] sm:text-xs md:text-sm lg:text-base">
        SKILLS
      </button>
      <button onClick={()=>{GoTo(4);}} id="page_flore_4" className="relative text-[10px] sm:text-xs md:text-sm lg:text-base">
        CONTACT
      </button>
    </div>
  )
}
