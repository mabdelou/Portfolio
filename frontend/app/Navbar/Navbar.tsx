import Language from "./Language/Language";
import Logo from "./Logo/Logo";
import Parts from "./Parts/Parts";


export default function Navbar() {
  return (
    <div className="relative flex pt-[35px]">
      <Logo/>
      {/* <div className="relative sm:flex"> */}
        <Parts/>
        <Language/>
`      {/* </div> */}`
    </div>
  )
}
