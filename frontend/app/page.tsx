'use client'

import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';
import Navbar from './Navbar/Navbar';
import Page from './Page/Page';
import PhoneNavBar from './PhoneNavBar/PhoneNavBar';


export interface FloorContextType
{
  Floor: any;
  setFloor: Dispatch<SetStateAction<{}>>;
}
const Data: FloorContextType = {Floor:{},setFloor: () => {}}
const UserContext = createContext<FloorContextType>(Data);

export const PageContext = createContext({});

export function GetFloorContext()
{
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('GetGameInfoContext must be used within a GameInfoProvider');
  }
  return context;
}

export default function Main() {
  const [Floor, setFloor] = useState(0);
  return (
    <main className="relative overflow-hidden bg-[#E5ECF1] text-[#666666] text-[15px] w-[100vw] h-[400vh]">
      <PageContext.Provider value={{Floor,setFloor}}>
        <Navbar/>
        <PhoneNavBar/>
        <Page/>
      </PageContext.Provider>
    </main>
  )
}
