

export default function ShortNavBar() {
    return (
        <div className="relative block space-y-[10px] mx-auto w-[100px] h-[100vh] bg-[#AAAAAA]">
            <div className="relative text-[10px] sm:text-xs md:text-sm lg:text-base">
                HOME
            </div>
            <div className="relative text-[#FC033D] text-[10px] sm:text-xs md:text-sm lg:text-base">
                ABOUT
            </div>
            <div className="relative text-[10px] sm:text-xs md:text-sm lg:text-base">
                SERVICE
            </div>
            <div className="relative text-[10px] sm:text-xs md:text-sm lg:text-base">
                PORTFOLIO
            </div>
            <div className="relative text-[10px] sm:text-xs md:text-sm lg:text-base">
                RESUME
            </div>
            <div className="relative text-[10px] sm:text-xs md:text-sm lg:text-base">
                BLOG
            </div>
            <div className="relative text-[10px] sm:text-xs md:text-sm lg:text-base">
                CONTENT
            </div>
            <div className="relative flex pt-[0.5vh] mr-[2.5vw] space-x-[1vw] text-[10px]">
                <div className="relative">
                    AR
                </div>
                <div className="relative">
                    FR
                </div>
                <div className="relative text-[#FC033D]">
                    EN
                </div>
            </div>
        </div>
    )
  }
  