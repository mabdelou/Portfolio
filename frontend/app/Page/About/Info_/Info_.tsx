import DButton from "../DButton/DButton";


export default function Info_() {
  return (
    <div className="relative mt-[35vh] ml-[15vw] text-[20px] w-[350px] h-[150px]">
      <div className="relative flex">
        <div className="relative w-[25px] h-[1px] bg-[#666666] top-[2vh]"></div>
          <p className=" relative ml-[0.5vw]">
            HELLO
          </p>
      </div>
      <div className="relative flex text-[30px] pt-[2.5%] ">
        <p className=" relative"> I’m </p>
        <p className=" relative ml-[0.5vw] text-[#FC033D]"> Mohammed  </p>
        <p className=" relative ml-[0.5vw]"> Abdelouafi </p>
      </div>
      <p className=" relative w-[485px] pt-[2.5%]">
        student at 1337 part of 42network and um6p, have completed more than 20 projects with high scores.
      </p>
      <DButton/>
    </div>
  )
}
