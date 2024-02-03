import DButton from "../DButton/DButton";


export default function Info_() {
  return (
    <div className="relative text-[10px] sm:text-[15px] md:text-[15px] 
        lg:text-[20px] w-[100%] sm:w-[50vw] h-[calc(50vh-50px)] sm:h-[calc(100vh-50px)]">
      <div className="relative  w-[200px] sm:w-[300px] md:w-[300px] lg:w-[450px] h-[auto]
         mx-auto pt-[calc((50vh-150px)/2)] sm:pt-[calc((100vh-290px)/2)]">
        <div className="relative flex w-[auto] h-[auto]">
          <div className="relative w-[25px] h-[1px] bg-[#666666] top-[2vh]"></div>
            <p className=" relative ml-[0.5vw]">
              مرحبا
            </p>
        </div>
        <div className="relative flex text-[10px] sm:text-[20px] md:text-[20px] lg:text-[30px] font-black pt-[2.5%] ">
          <p className=" relative "> عبد الوافي </p>
          <p className=" relative ml-[0.5vw] text-[#FC033D]"> محمد  </p>
          <p className=" relative ml-[0.5vw]"> انا </p>
        </div>
        <p className=" relative w-[200px] sm:w-[300px] md:w-[300px] lg:w-[450px] pt-[2.5%]">
          طالب في 1337. التابعة ل شبكة 42 و جامعة محمد السادس التقنية. اكملت اكتر من 20 مشروع مع علامات مرتفعة
        </p>
        <DButton/>
      </div>
    </div>
  )
}
