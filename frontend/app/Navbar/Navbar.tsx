import DisplaySNB from "./DisplaySNB/DisplaySNB";
import Language from "./Language/Language";
import Logo from "./Logo/Logo";
import Parts from "./Parts/Parts";
import ShortNavBar from "./ShortNavBar/ShortNavBar";


export default function Navbar() {

    return (
      <div className="relative flex pt-[35px]">
          <Logo/>
          <Parts/>
          <Language/>
        {/* <div className="relative flex">
          <Logo/>
          <DisplaySNB/>
          <ShortNavBar/>
        </div> */}
      </div>
    );


}
