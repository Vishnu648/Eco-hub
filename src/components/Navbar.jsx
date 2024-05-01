import React,{useState} from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar({optionSetter}) {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="my-3 md:my-1flex flex-col w-full">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold text-[#008000]">ECO-HUB</h1>
        <button className="text-sm font-semibold px-3 py-2 rounded-full text-white bg-[#f8b72b] hover:bg-black">
          GARBAGE COLLECTOR
        </button>
      </div>

      
      <section className="hidden lg:flex justify-center gap-28 my-4 text-white text-xl font-bold">
        <p onClick={()=>optionSetter('home')} className="cursor-pointer px-2 py-1 hover:text-black ">Home</p>
        <p onClick={()=>optionSetter('about')} className="cursor-pointer px-2 py-1 hover:text-black ">About</p>
        <p onClick={()=>optionSetter('services')} className="cursor-pointer px-2 py-1 hover:text-black ">Services</p>
        <p onClick={()=>optionSetter('gallery')} className="cursor-pointer px-2 py-1 hover:text-black ">Gallery</p>
        <p onClick={()=>optionSetter('contact')} className="cursor-pointer px-2 py-1 hover:text-black ">Contact</p>
      </section>

      <div className="lg:hidden mt-1" onClick={() => { setIsVisible(prev=>!prev) }}>
        <RxHamburgerMenu size={'30px'}/>
        {
          isVisible?
          <div className="flex flex-col gap-1">
          <p onClick={()=>optionSetter('home')} className=" px-2 py-1 bg-white w-[15vh] text-2xl rounded-md  hover:text-black ">Home</p>
        <p onClick={()=>optionSetter('about')} className=" px-2 py-1 bg-white w-[15vh] text-2xl rounded-md hover:text-black ">About</p>
        <p onClick={()=>optionSetter('services')} className=" px-2 py-1 bg-white w-[15vh] text-2xl rounded-md hover:text-black ">Services</p>
        <p onClick={()=>optionSetter('gallery')} className=" px-2 py-1 bg-white w-[15vh] text-2xl rounded-md hover:text-black ">Gallery</p>
        <p onClick={()=>optionSetter('contact')} className=" px-2 py-1 bg-white w-[15vh] text-2xl rounded-md hover:text-black ">Contact</p>
      </div>
        :""
        }
      </div>
    </div>
  );
}

export default Navbar;
