'use client'

import '/app/PhoneNavBar/Style/Style.css'

const Display = () =>
{
  const DisplaySNB = document.getElementById('DisplaySNB');
  const ShortNavBarID = document.getElementById('ShortNavBarID');
  const SNBContent = document.getElementById('SNBContent');
  if(DisplaySNB && ShortNavBarID && SNBContent)
  {
    if(ShortNavBarID.style.display == "block")
    {
      ShortNavBarID.style.display = "none";
      SNBContent.style.animation = "hide_context 1s 1 forwards";
      ShortNavBarID.style.animation = "close_nb 2s 1 forwards";
      DisplaySNB.style.animation = "move_button_II 1s 1 forwards";
    }
    else
    {
      ShortNavBarID.style.display = "block";
      SNBContent.style.opacity = "0";
      ShortNavBarID.style.animation = "display_nb 2s 1 forwards";
      SNBContent.style.animation = "show_context 2s 1s 1 forwards";
      DisplaySNB.style.animation = "move_button_I 1s 0.66s 1 forwards";
    }
  }
}


export default function DisplaySNB() {
    return (
      <button
        id="DisplaySNB"
        className="fixed sm:hidden top-[10px] w-[25px] right-[0px] h-[25px] bg-[#666666] rounded-md z-40"
        onClick={()=>{Display();}}>
      </button>
    );
  }
  