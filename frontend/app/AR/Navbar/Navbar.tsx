import Language from "./Language/Language";
import Logo from "./Logo/Logo";
import Parts from "./Parts/Parts";


export default function Navbar() {

    return (
      <div className="fixed flex h-[50px] w-[100vw] z-20 bg-[#E5ECF1]">
          <Language/>
          <Parts/>
          <Logo/>
      </div>
    );


}
