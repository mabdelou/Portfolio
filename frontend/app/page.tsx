import Image from 'next/image'
import Navbar from './Navbar/Navbar';
import Page from './Page/Page';

export default function Main() {
  return (
    <main className="relative bg-[#E5ECF1] text-[#666666] text-[15px] w-[100vw] h-[calc((750px*7)+700px+85px)]">
        <Navbar/>
        <Page/>
    </main>
  )
}
