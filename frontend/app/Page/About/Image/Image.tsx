

export default function Image() {
  return (
    <div className="relative overflow-hidden sm:block w-[100vw] sm:w-[50vw] h-[50vh] sm:h-[calc(100vh-50px)]">
      <img
        src="/photo/photographII.png"
        alt="photograph"
        className="relative z-10 sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 
                  2xl:h-[700px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px]
                  mt-[calc(50vh-95%)] sm:mt-[calc(100vh-350px)] md:mt-[calc(100vh-450px)]
                  lg:mt-[calc(100vh-550px)] xl:mt-[calc(100vh-650px)] 2xl:mt-[calc(100vh-750px)] mx-auto"/>
    </div>
  )
}
