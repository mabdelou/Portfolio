'use client'

import { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';
import PhoneNavBar from './PhoneNavBar/PhoneNavBar';
import Main from './Page/Main';
import PageContext from './PageContext';


const fun = (Floor:number):void =>
{
  for(let a=1;a<5;a++)
  {
    const b = document.getElementById(`page_flore_${a}`);
    const b1 = document.getElementById(`page_flore_s${a}`);
    if(b && b1 && a == Floor)
    {
      b.style.color = "#FC033D";
      b1.style.color = "#FC033D";
    }
    else if(b && b1)
    {
      b.style.color = "#666666";
      b1.style.color = "#666666";
    }  
  }
}

class DataClass
{
  Floor:number;

  constructor(NewFloor:number)
  {
    this.Floor = NewFloor;
  }
  SetFloor(NewFloor:number):void
  {
    this.Floor = NewFloor;
    if(this.Floor > 0 && this.Floor < 5)
    fun(this.Floor);
  }
}

export let Data:DataClass = new DataClass(1);

export default function Page() {
  const [Floor, setFloor] = useState(1);
  // useEffect(()=>
  // {
  //   console.log("useEffect "+Floor);
  // },[Floor]);
  return (
    <main className="relative overflow-hidden bg-[#E5ECF1] text-[#666666] text-[15px] w-[100vw] h-[400vh]">
      <PageContext.Provider value={{Floor,setFloor}}>
        <Navbar/>
        <PhoneNavBar/>
        <Main/>
      </PageContext.Provider>
    </main>
  )
}
