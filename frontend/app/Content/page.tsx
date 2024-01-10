import DButton from "./DButton/DButton";
import Image from "./Image/Image";
import Info_ from './Info_/Info_';


export default function Info() {
  return (
    <div className="relative overflow-hidden">
      <div className="relative flex">
        <Info_/>
        <Image/>
      </div>
      <DButton/>
    </div>
  )
}
