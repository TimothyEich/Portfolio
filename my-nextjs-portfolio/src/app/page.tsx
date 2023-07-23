//import Image from 'next/image'
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Mentor from "./Mentor";
import Typewriter from 'typewriter-effect';



export default function Home() {
  return (
<div className="bg-gradient-to-r from-[#55017c] from-35% via-[#fe653b] via-50% to-[#55017c] to-65%">
<nav className="bg-gradient-to-r from-[#55017c] from-35% via-[#fe653b] via-50% to-[#55017c] to-65% h-1">
  <div className="max-w-[100%] mx-auto sm:px-6 lg:px-8">
    <div className="flex justify-between ">
      <div className="">
        <Link href="/">
          <img className="max-w-[30%] h-auto justify-self-start mt-[4%] hover:opacity-[30] hover:max-w-[35%]" src="/TE-Logo.png" alt="Logo"/> 
        </Link>
      </div>
      <div className="hidden md:flex space-x-2 mr-[2%] mt-[3%] "> 
        <Link href="/Mentor">
          <div className="button-container inline-block">
            <button className=" text-[#ee3c92] hover:bg-[#230444] hover:text-slate-100 px-5 py-3 text-lg rounded-md uppercase font-bold ">Mentoring</button>
          </div>
        </Link>
        <Link href="/Contact">
          <div className="button-container inline-block flex-shrink-0">
            <button className="text-[#ee3c92] hover:bg-[#230444] hover:text-slate-100 px-3 py-2 rounded-md text-lg uppercase font-bold border-4 border-[#230444] hover:border-[#ee3c92]">Say Hello!</button>
          </div>
        </Link>
      </div>
      <AiOutlineMenu size={40} className="text-[#ee3c92] md:hidden mt-[5%] mr-[3%]"/>
    </div>
  </div>
</nav>




  <main className="bg-gradient-to-r from-[#55017c] from-35% via-[#fe653b] via-50% to-[#55017c] to-65% flex flex-col items-center justify-between p-24 mt-[15%]">
    <div className="mb-32 text-center flex flex-col items-center bg-transparent justify-center">
      <h1 className="text-5xl font-bold mb-8 text-[#c7d5f9] decoration-4">Welcome to my page!</h1>
      
      <p className="text-xl text-[#c7d5f9] p-10 max-w-[65%] mb-[6%]  rounded-md shadow-inner shadow-[#e40088] bg-[#230444] bg-opacity-80">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales pharetra felis, sit amet malesuada augue luctus et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </p>
    </div>
  </main>
  <div className="bg-gradient-to-r from-[#55017c] from-35% via-[#fe653b] via-50% to-[#55017c] to-65%">&nbsp;</div>
  <div className="bg-gradient-to-r from-[#55017c] from-35% via-[#fe653b] via-50% to-[#55017c] to-65%">&nbsp;</div>
  <div className="bg-gradient-to-r from-[#55017c] from-35% via-[#fe653b] via-50% to-[#55017c] to-65%">&nbsp;</div>
  <div className="bg-gradient-to-r from-[#55017c] from-35% via-[#fe653b] via-50% to-[#55017c] to-65%">&nbsp;</div>
  <div className="bg-gradient-to-r from-[#55017c] from-35% via-[#fe653b] via-50% to-[#55017c] to-65%">&nbsp;</div>
  <div className="bg-gradient-to-r from-[#55017c] from-35% via-[#fe653b] via-50% to-[#55017c] to-65%">&nbsp;</div>
  <div className="bg-gradient-to-r from-[#55017c] from-35% via-[#fe653b] via-50% to-[#55017c] to-65%">&nbsp;</div>
  <div className="bg-gradient-to-r from-[#55017c] from-35% via-[#fe653b] via-50% to-[#55017c] to-65%">&nbsp;</div>
  <div className="bg-gradient-to-r from-[#55017c] from-35% via-[#fe653b] via-50% to-[#55017c] to-65%">&nbsp;</div>
  <div className="bg-gradient-to-r from-[#55017c] from-35% via-[#fe653b] via-50% to-[#55017c] to-65%">&nbsp;</div>
  <div className="bg-gradient-to-r from-[#55017c] from-35% via-[#fe653b] via-50% to-[#55017c] to-65%">&nbsp;</div>
  <div className="bg-gradient-to-r from-[#55017c] from-35% via-[#fe653b] via-50% to-[#55017c] to-65%">&nbsp;</div>
  <div className="bg-gradient-to-r from-[#55017c] from-35% via-[#fe653b] via-50% to-[#55017c] to-65%">&nbsp;</div>
  <div className="bg-gradient-to-r from-[#55017c] from-35% via-[#fe653b] via-50% to-[#55017c] to-65%">&nbsp;</div>



  <div className=" bg-[gradient-to-r from-[#55017c] from-35% via-[#fe653b] via-50% to-[#55017c] to-65%] flex flex-col items-center pt-[5%] pb-[5%]">
    <div className="grid grid-cols-2 gap-8 mt-[15%] bg-transparent pb-[10%]">
      <div className="bg-[#4b1c86] bg-opacity-80 rounded-lg p-6 ml-[5%] shadow-2xl shadow-[#e40088] mt-[-70%] mb-[20%]">
        <h2 className="text-3xl font-semibold mb-3 text-[#e40088] text-center">Boop</h2>
        <p className="text-[#c7d5f9] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales pharetra felis, sit amet malesuada augue luctus et.
        </p>
      </div>
      <div className="bg-[#4b1c86] bg-opacity-80 rounded-lg p-6 mr-[5%] shadow-2xl shadow-[#e40088] mt-[-70%] mb-[20%]">
        <h2 className="text-3xl font-semibold mb-3 text-[#e40088] text-center">Beep</h2>
        <p className="text-[#c7d5f9] text-center">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sit amet venenatis odio.
        </p>
      </div>
    </div>
  </div>
</div>
  );
}

