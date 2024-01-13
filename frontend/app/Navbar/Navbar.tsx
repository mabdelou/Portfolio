import Language from "./Language/Language";
import Logo from "./Logo/Logo";
import Parts from "./Parts/Parts";


export default function Navbar() {

    return (
      <div className="relative flex h-[50px] w-[100vw]">
          <Logo/>
          <Parts/>
          <Language/>
      </div>
    );


}
