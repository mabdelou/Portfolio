import { Dispatch, SetStateAction, createContext, useContext } from "react";

export interface FloorContextType
{
  Floor: number;
  setFloor: Dispatch<SetStateAction<number>>;
}
const Data: FloorContextType = {Floor:1,setFloor: () => {}}

const PageContext = createContext<FloorContextType>(Data);

export function GetFloorContext():FloorContextType
{
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('GetGameInfoContext must be used within a GameInfoProvider');
  }
  return context;
}

export default PageContext;