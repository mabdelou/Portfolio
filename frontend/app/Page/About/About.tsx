
import Info_ from './Info_/Info_';
import Image from './Image/Image';


export default function About() {
  return (

    <div className="relative w-[100vw] h-[100vh] mt-[50px]">
      <div className="relative  flex w-[100vw] h-[100vh] mt-[50px] bg-[#E5ECF1]">
          <Info_/>
          <Image/>
      </div>
    </div>
  )
}
