import DisplaySNB from "./DisplaySNB/DisplaySNB";
import ShortNavBar from "./ShortNavBar/ShortNavBar";

export default function PhoneNavBar() {
    return (
      <div>
        <DisplaySNB/>
        <div className="fixed sm:hidden w-[100px] h-[100vh] bg-[#CCCCCC] top-[0px] ml-[calc(100vw-100px)] z-30">
          <ShortNavBar/>
        </div>
      </div>
    )
  }
  