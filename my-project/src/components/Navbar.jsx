import React from 'react'
import vector from "../assets/Vector.png";
import text from "../assets/text.png";
import Button from './Button';
import { useState } from 'react';
import hamburger from "../assets/hamburger.png"
const Navbar = () => {

  const [isMenu, setIsMenu] = useState(false);
  const [rotate, setRotate] = useState(false)
  return ( 
     
    <div className='w-screen h-[140px]  transition-all duration-1000  flex justify-between items-center' >
      {isMenu? (
          <div className={`flex justify-center w-screen min-h-screen animateMove transition-all duration-500  top-0 absolute  bg-[#217191] `}>
                 <div className="flex items-center gap-3 md:gap-6 absolute top-14 left-10  ">
      <img src={vector} className='w-10 h-10' />
      <img className='w-[100px] h-20   object-contain  ' src={text}/>
      
      </div>
             <button className='flex absolute top-14 right-20 text-[40px]  text-white ' onClick={() => setIsMenu(!isMenu)} >X</button>
             <div className="text-white gap-4 absolute left-10 top-[30%] flex flex-col text-[30px] ">
        <a href="">Services</a>
        <a href="" className='relative flex gap-4' >Products <p onClick={(e) => {
          e.preventDefault();
          setRotate(!rotate)
          } } className={rotate? "rotate-180":""}  >&darr;</p> {rotate?(
            <div className="bg-white top-0 left-[100%] absolute w-40 h-40 ">
              <audio src="af.mp4" type="mp4" ></audio>
            </div>
          ):""} </a>
        <a href="">About Us</a>
        <a href="">Resources</a>
      </div>
          </div>
        ):""}
    <div className="mr-[40px] ml-[40px] w-screen flex items-center justify-between  ">
        <div className="flex items-center gap-3 md:gap-6 ">
      <img src={vector} className='w-10 h-10' />
      <img className='w-[100px] h-20   object-contain  ' src={text}/>
      
      </div>
      <div className="text-white gap-4 hidden lg:flex">
        <a href="">Services</a>
        <a href="">Products</a>
        <a href="">About Us</a>
        <a href="">Resources</a>
      </div>
      <div className="flex gap-3 ">
        <div className="hidden md:flex">
        <Button text="Contact Us" color="transparent" color2="#C7A48B" />
        </div>
        <button className='lg:hidden animationMenu  ' onClick={() => setIsMenu(!isMenu)} ><img src={hamburger} alt="" /></button>
      
      </div>
      
      </div>
    </div>
  )
} 

export default Navbar;
