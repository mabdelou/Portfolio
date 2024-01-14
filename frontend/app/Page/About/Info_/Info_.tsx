import DButton from "../DButton/DButton";


export default function Info_() {
  return (
    <div className="relative text-[10px] sm:text-[15px] md:text-[15px] lg:text-[20px] w-[50vw] h-[calc(100vh-50px)]">
      <div className="relative  w-[200px] sm:w-[300px] md:w-[300px] lg:w-[450px] h-[auto] mx-auto pt-[calc((100vh-290px)/2)]">
        <div className="relative flex w-[auto] h-[auto]">
          <div className="relative w-[25px] h-[1px] bg-[#666666] top-[2vh]"></div>
            <p className=" relative ml-[0.5vw]">
              HELLO
            </p>
        </div>
        <div className="relative flex text-[10px] sm:text-[20px] md:text-[20px] lg:text-[30px] font-black pt-[2.5%] ">
          <p className=" relative"> I’m </p>
          <p className=" relative ml-[0.5vw] text-[#FC033D]"> Mohammed  </p>
          <p className=" relative ml-[0.5vw]"> Abdelouafi </p>
        </div>
        <p className=" relative w-[200px] sm:w-[300px] md:w-[300px] lg:w-[450px] pt-[2.5%]">
          student at 1337 part of 42network and um6p, have completed more than 20 projects with high scores.
        </p>
        <DButton/>
      </div>
    </div>
  )
}
