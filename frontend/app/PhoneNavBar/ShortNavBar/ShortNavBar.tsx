'use client'

import '/app/PhoneNavBar/Style/Style.css'

const Display = () =>
{
  const ShortNavBarID = document.getElementById('ShortNavBarID');
  const SNBContent = document.getElementById('SNBContent');
  if(ShortNavBarID && SNBContent)
  {
    ShortNavBarID.style.display = "none";
    SNBContent.style.animation = "hide_context 1s 1 forwards";
    ShortNavBarID.style.animation = "close_nb 2s 1 forwards";

  }
}


export default function ShortNavBar() {
    return (
        <div className="relative overflow-hidden block mx-auto space-y-[25px] w-[auto] h-[auto] rounded-tl-lg">
            <button
                    className="relative w-[25px] h-[25px] rounded-br-md bg-[#666666] text-[#E5ECF1]"
                    onClick={()=>{Display();}}>
                X
            </button>
            <div id="SNBContent" className="relative block space-y-[15px] mx-auto w-[auto] h-[auto]">
                <div className="relative text-center text-[15px]">
                    HOME
                </div>
                <div className="relative text-center text-[#FC033D] text-[15px]">
                    ABOUT
                </div>
                <div className="relative text-center text-[15px]">
                    SERVICE
                </div>
                <div className="relative text-center text-[15px]">
                    PORTFOLIO
                </div>
                <div className="relative text-center text-[15px]">
                    RESUME
                </div>
                <div className="relative text-center text-[15px]">
                    BLOG
                </div>
                <div className="relative text-center text-[15px]">
                    CONTENT
                </div>
                <div className="relative flex pt-[0.5vh] space-x-[1vw] text-[10px] w-[50px] mx-auto">
                    <div className="relative">
                        AR
                    </div>
                    <div className="relative">
                        FR
                    </div>
                    <div className="relative text-[#FC033D]">
                        EN
                    </div>
                </div>
            </div>
        </div>
    )
  }
  