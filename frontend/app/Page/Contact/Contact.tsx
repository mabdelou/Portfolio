

export default function Contact() {
  return (
    <div className="relative ">
      <div className="relative w-[100vw] h-[calc(100vh-50px)] mt-[50px] bg-[#E5ECF1] ">
        <div className="relative w-[100vw] h-[100px] ">
          <p className="relative top-1/2 transform -translate-y-1/2 text-center text-[#FC033D] text-[45px] font-black">
              LET YOUR IMAGINATION BE TRUTH BY ONE CLICK 
          </p>
        </div>
        <div className="relative flex w-[100vw] h-[200px] ">
        <div className="relative w-[50vw] h-[200px]">
            <div className="relative w-[400px] h-[100px] mx-auto mt-[50px] ">
              <img className="relative w-[42px] h-[42px] mx-auto" src="/logo/phone-128.png" />
              <div className="relative mx-auto w-[75px] h-[35px]"> 
                <p className="text-center text-[#666666] text-[25px] font-black">
                  Phone
                </p>
              </div>
              <div className="relative mx-auto w-[225px] h-[25px]">
                <p className="text-center text-[#FC033D] font-bold">
                  +212616170907
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-[50vw] h-[200px]">
            <div className="relative w-[400px] h-[100px] mx-auto mt-[50px] ">
              <img className="relative w-[42px] h-[42px] mx-auto" src="/logo/email-128.png" />
              <div className="relative mx-auto w-[75px] h-[35px]"> 
                <p className="text-center text-[#666666] text-[25px] font-black">
                  Email
                </p>
              </div>
              <div className="relative mx-auto w-[225px] h-[25px]">
                <p className="text-center text-[#FC033D] font-bold">
                  programming.abdu@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative  w-[calc(100vw-20px)] h-[calc((100vh-50px)-320px)] mt-[10px] mx-auto bg-[#d3d9de] rounded-lg">
          <div className="relative flex w-[100%] h-[75%] top-[10%]">
            <div className="relative w-[50%] h-[100%]">
              <p className="ml-[65px] mt-[20px]">
                First Name:
              </p>
              <div className="relative bg-[#E5ECF1] w-[90%] h-[35px] ml-[50px] rounded-md"></div>
              <p className="ml-[65px] mt-[40px]">
                Your Email:
              </p>
              <div className="relative bg-[#E5ECF1] w-[90%] h-[35px] ml-[50px] rounded-md"></div>
              <p className="ml-[65px] mt-[40px]">
                Your Subject:
              </p >
              <div className="relative bg-[#E5ECF1] w-[90%] h-[35px] ml-[50px] rounded-md"></div>
            </div>
            <div className="relative w-[50%] h-[100%] ]">
              <p className="ml-[15px] ">
                Your Message:
              </p>
              <div className="relative w-[calc(100%-10px)] h-[90%] bg-[#E5ECF1] rounded-md"></div>
            </div>
          </div>
          <div className="relative w-[200px] h-[40px] bg-[#FC033D] mx-auto mt-[50px] rounded-lg">
            <p className=" W-[100px] h-[25px] text-center text-[#E5ECF1] text-[15px] font-black">
              SEND MESSAGE
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
