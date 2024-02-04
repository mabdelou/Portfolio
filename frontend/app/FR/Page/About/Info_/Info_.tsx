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
              BONJOUR
            </p>
        </div>
        <div className="relative flex text-[10px] sm:text-[20px] md:text-[20px] lg:text-[30px] font-black pt-[2.5%] ">
          <p className=" relative"> je suis </p>
          <p className=" relative ml-[0.5vw] text-[#FC033D]"> Mohammed  </p>
          <p className=" relative ml-[0.5vw]"> Abdelouafi </p>
        </div>
        <p className=" relative w-[200px] sm:w-[300px] md:w-[300px] lg:w-[450px] pt-[2.5%]">
        Étudiant à l'école 1337, faisant partie du réseau 42 et de l'UM6P, j'ai terminé plus de 20 projets avec des scores élevés."
        </p>
        <DButton/>
      </div>
    </div>
  )
}
