import Image from 'next/image'
import Navbar from './Navbar/Navbar';
import Content from './Content/page';

export default function Home() {
  return (
    <main className="relative bg-[#E5ECF1] text-[#666666] text-[15px] w-[100vw] h-[100vh]">
        <Navbar/>
        <Content/>
    </main>
  )
}
