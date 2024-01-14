'use client'

import '/app/PhoneNavBar/Style/Style.css'

const Display = () =>
{
  const ShortNavBarID = document.getElementById('ShortNavBarID');
  const SNBContent = document.getElementById('SNBContent');
  if(ShortNavBarID && SNBContent)
  {
    ShortNavBarID.style.display = "block";
    SNBContent.style.opacity = "0";
    ShortNavBarID.style.animation = "display_nb 2s 1 forwards";
    SNBContent.style.animation = "show_context 2s 1s 1 forwards";
  }
}


export default function DisplaySNB() {
    return (
      <button
        className="fixed sm:hidden top-[calc((100vh-75px)/2)] w-[10px] h-[75px] right-[0px] bg-[#FC033D] rounded-l-md z-30"
        onClick={()=>{Display();}}>
      </button>
    );
  }
  