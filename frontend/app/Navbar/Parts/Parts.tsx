'use client'

const GoTo = (Target:string) =>
{

}

export default function Parts() {
  return (
    <div className="relative hidden sm:flex space-x-[2.5vw] my-auto  mx-auto">
      {/* <a href="#Home" id="page_flore_1" className="relative text-[#FC033D] text-[10px] sm:text-xs md:text-sm lg:text-base">
        HOME
      </a> */}
      <button onClick={()=>{GoTo("Home");}} id="page_flore_1" className="relative text-[#FC033D] text-[10px] sm:text-xs md:text-sm lg:text-base">
        HOME
      </button>
      <button id="page_flore_2" className="relative text-[10px] sm:text-xs md:text-sm lg:text-base">
        ABOUT
      </button>
      {/* <div id="page_flore_3" className="relative text-[10px] sm:text-xs md:text-sm lg:text-base">
        SERVICE
      </div> */}
      <button id="page_flore_3" className="relative text-[10px] sm:text-xs md:text-sm lg:text-base">
        SKILLS
      </button>
      <button id="page_flore_4" className="relative text-[10px] sm:text-xs md:text-sm lg:text-base">
        CONTACT
      </button>
    </div>
  )
}
