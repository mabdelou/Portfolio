import DisplaySNB from "./DisplaySNB/DisplaySNB";
import ShortNavBar from "./ShortNavBar/ShortNavBar";

export default function PhoneNavBar() {
    return (
      <div className="absolute w-[100px] h-[100vh] bg-[#AAAAAA] ml-[calc(99vw-100px)] z-30">
         <DisplaySNB/>
         <ShortNavBar/>
      </div>
    )
  }
  