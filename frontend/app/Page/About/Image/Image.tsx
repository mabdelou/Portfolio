

export default function Image() {
  return (
    <div className="relative hidden sm:block scale-[1] w-[50vw] h-[750px]">
      <img
        src="/photographII.png"
        alt="photograph"
        className="relative z-10 sm:h-[300px] md:h-[400px] lg:h-[500px] sm:w-[300px] md:w-[400px] lg:w-[500px] sm:mt-[calc(100vh-350px)] md:mt-[calc(100vh-450px)] lg:mt-[calc(100vh-550px)]"/>
    </div>
  )
}
