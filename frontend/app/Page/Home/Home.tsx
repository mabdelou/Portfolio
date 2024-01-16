

export default function Home() {
  return (
    <div className="relative ">
      <div className="relative flex w-[300vw] h-[100vh] bg-[#E5ECF1]">
        <div className="relative flex items-center justify-center  w-[100vw] h-[100vh]">
          <p className="text-center  text-[300px]  font-black">
            DESIGNER
          </p>
        </div>
        <div className="relative w-[100vw] h-[100vh] text-center text-[300px] font-black">
          <p className="text-center  text-[300px]  font-black">
            DEVELOPER
          </p>
        </div>
        <div className="relative w-[100vw] h-[100vh] text-center text-[300px] font-black">
          <p className="text-center  text-[300px]  font-black">
            PROGRAMMER
          </p>
        </div>
      </div>
      <div className="absolute flex items-center justify-center space-x-[50px] left-1/2 -translate-x-1/2 bottom-[5vh] w-[250px] h-[75px]">
        <div className="relative w-[20px] h-[20px] bg-[#FC033D] rounded-3xl"></div>
        <div className="relative w-[20px] h-[20px] bg-[#666666] rounded-3xl"></div>
        <div className="relative w-[20px] h-[20px] bg-[#666666] rounded-3xl"></div>
      </div>
    </div>
  )
}
