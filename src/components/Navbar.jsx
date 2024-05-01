import React from "react";

function Navbar({optionSetter}) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold text-[#008000]">ECO-HUB</h1>
        <button className="text-sm font-semibold px-3 py-2 rounded-full text-white bg-[#f8b72b] hover:bg-black">
          GARBAGE COLLECTOR
        </button>
      </div>

      <section className="flex justify-center gap-28 my-4 text-white text-xl font-bold">
        <p onClick={()=>optionSetter('home')} className="cursor-pointer px-2 py-1 hover:text-black ">Home</p>
        <p onClick={()=>optionSetter('about')} className="cursor-pointer px-2 py-1 hover:text-black ">About</p>
        <p onClick={()=>optionSetter('services')} className="cursor-pointer px-2 py-1 hover:text-black ">Services</p>
        <p onClick={()=>optionSetter('gallery')} className="cursor-pointer px-2 py-1 hover:text-black ">Gallery</p>
        <p onClick={()=>optionSetter('contact')} className="cursor-pointer px-2 py-1 hover:text-black ">Contact</p>
      </section>
    </div>
  );
}

export default Navbar;
