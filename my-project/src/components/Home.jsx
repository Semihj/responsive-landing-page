import React from "react";
import Button from "./Button";
import homeImg from "./../assets/homeImg.svg";
import text from "../assets/text.png"

const Home = () => {
  return (
    <div className="flex lg:flex-row flex-col mt-10 md:mt-0 w-screen min-h-[calc(100vh-140px)]  justify-between items-center">
      <div className=" text-white flex flex-col gap-10 w-[70vw]  ">
        <div className="flex flex-col justify-center items-center w-full gap-4 ">
          <img src={text} className="bg-[#3C6373] rounded-xl max-w-[120px] max-h-10 object-contain " alt="" />
          <h2 className="text-[25px] md:text-[40px] text-white items-center font-bold ">
            Synergy of Expertise Integrity <br /> in Partnership <br /> Ideal Solutions - as a
            Standard
          </h2>
          <p>
            Experienced team of innovators and developers bringing new products
            to life
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Button text="Get In Touch" color="#C7A48B" color2="transparent" />
            <Button text="Services" color="transparent" color2="#C7A48B" />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <img src={homeImg} className="object-cover w-[80vw] min-h-[50vh] " alt="" />
      </div>
      <div className="h-screen"></div>
    </div>
  );
};

export default Home;
