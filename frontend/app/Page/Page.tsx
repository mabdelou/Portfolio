import Home from "./Home/Home";
import About from "./About/About";
import Service from "./Service/Service";
import Resume from "./Resume/Resume";
import Blog from "./Blog/Blog";
import Content from "./Content/Content";
import Portfolio from "./Portfolio/Portfolio";


export default function Page() {
  return (
    <div className="relative w-[100vw] h-[calc(750px*7)]">
        <About/>
        <Home/>
        <Service/>
        <Portfolio/>
        <Resume/>
        <Blog/>
        <Content/>
    </div>
  )
}
