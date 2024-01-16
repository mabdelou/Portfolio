'use client'

import '/app/PhoneNavBar/Style/Style.css'

export const Close = () =>
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
                    onClick={()=>{Close();}}>
                X
            </button>
            <div id="SNBContent" className="relative block space-y-[15px] mx-auto w-[auto] h-[auto]">
                <div id="page_flore_s1" className="relative text-center text-[15px]">
                    HOME
                </div>
                <div id="page_flore_s2" className="relative text-center text-[#FC033D] text-[15px]">
                    ABOUT
                </div>
                <div id="page_flore_s3" className="relative text-center text-[15px]">
                    SERVICE
                </div>
                <div id="page_flore_s4" className="relative text-center text-[15px]">
                    PORTFOLIO
                </div>
                <div id="page_flore_s5" className="relative text-center text-[15px]">
                    RESUME
                </div>
                <div id="page_flore_s6" className="relative text-center text-[15px]">
                    BLOG
                </div>
                <div id="page_flore_s7" className="relative text-center text-[15px]">
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
  