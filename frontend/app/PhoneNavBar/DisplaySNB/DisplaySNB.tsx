'use client'


const Display = () =>
{
  const DisplaySNB = document.getElementById('DisplaySNB');
  const ShortNavBar = document.getElementById('ShortNavBar');

  if(DisplaySNB && ShortNavBar)
  {
    if(ShortNavBar.style.display == "block")
    {
      ShortNavBar.style.display = "none";
      DisplaySNB.style.right = "0px";
    }
    else
    {
      ShortNavBar.style.display = "block";
      DisplaySNB.style.right = "75px";
    }
  }
}


export default function DisplaySNB() {
    return (
      <button
        id="DisplaySNB"
        className="fixed sm:hidden top-[10px] w-[25px] right-[0px] h-[25px] bg-[#666666] rounded-md z-40"
        onClick={()=>{Display();}}>
      </button>
    );
  }
  