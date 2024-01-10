import Language from "./Language/Language";
import Logo from "./Logo/Logo";
import Parts from "./Parts/Parts";


export default function Navbar() {
  return (
    <div className="relative flex pt-[1.75%]">
      <Logo/>
      <Parts/>
      <Language/>
    </div>
  )
}
