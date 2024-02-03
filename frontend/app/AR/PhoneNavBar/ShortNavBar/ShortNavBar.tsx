'use client'

import '../Style/Style.css'
import { GoTo } from '../../Navbar/Parts/Parts';
import { Data } from '../../page';

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
                <div id="page_flore_s1" onClick={()=>{Data.SetFloor(GoTo(1));}} className="relative cursor-pointer text-center text-[#FC033D] text-[15px]">
                    الصفحة الرئيسية
                </div>
                <div id="page_flore_s2" onClick={()=>{Data.SetFloor(GoTo(2));}} className="relative cursor-pointer text-center text-[15px]">
                    عني
                </div>
                {/* <div id="page_flore_s3" className="relative text-center text-[15px]">
                    SERVICE
                </div> */}
                <div id="page_flore_s3" onClick={()=>{Data.SetFloor(GoTo(3));}} className="relative cursor-pointer text-center text-[15px]">
                    مهاراتي
                </div>
                <div id="page_flore_s4" onClick={()=>{Data.SetFloor(GoTo(4));}} className="relative cursor-pointer text-center text-[15px]">
                    إتصل بي
                </div>
                <div className="relative flex pt-[0.5vh] space-x-[1vw] text-[10px] w-[50px] mx-auto">
                <a className="relative text-[#FC033D]">
                    AR
                </a>
                <a href="/FR" className="relative">
                    FR
                </a>
                <a href="/EN" className="relative">
                    EN
                </a>
                </div>
            </div>
        </div>
    )
  }
  