
import Info_ from './Info_/Info_';
import Image from './Image/Image';


export default function About() {
  return (

    <div className="relative w-[100vw] h-[850px]">
      {/* <div className="relative flex w-[100vw] h-[100px] bg-[#E5ECF1] items-center justify-center">
        <div className="relative w-[30px] h-[1px] bg-[#FC033D] mt-[35px]"></div>
        <p className="relative text-[#FC033D] text-[50px] ml-[25px] text-center">
          About
        </p>
        <div className="relative w-[30px] h-[1px] bg-[#FC033D] ml-[25px] mt-[35px]"></div>
      </div> */}
      <div className="relative w-[100vw] h-[calc(100vh-50px)] bg-[#E5ECF1]">
        <div className="relative flex w-[100vw] h-[calc(100vh-50px)]">
          <Info_/>
          <Image/>
        </div>
      </div>

    </div>
  )
}
