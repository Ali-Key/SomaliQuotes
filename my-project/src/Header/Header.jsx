import React from "react";
import Pages from "../Pages/Pages";

export default function Header() {
  return (
    <>
      <div className=" flex  text-center bg-blue-600 gap-6 "
      
    >
      <h1 className=" w-[30%] font-bold  text-xl text-white p-6 uppercase">Somali Qoues </h1>
       
       <div className=" flex flex-grow justify-center  items-center ">
       <Pages className= " "/>
       </div>
     
    </div>
   
    </>
  
  );
}
