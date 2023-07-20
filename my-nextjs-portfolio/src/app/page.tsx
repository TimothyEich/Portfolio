//import Image from 'next/image'
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Mentor from "./Mentor";
import Typewriter from 'typewriter-effect';



export default function Home() {
  return (
<div className="bg-slate-100">
<nav className="bg-slate-100 h-1">
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
            <button className=" text-indigo-700 hover:bg-slate-800 hover:text-slate-100 px-5 py-3 text-lg rounded-md uppercase font-bold ">Mentoring</button>
          </div>
        </Link>
        <Link href="/Contact">
          <div className="button-container inline-block flex-shrink-0">
            <button className="text-indigo-700 hover:bg-slate-800 hover:text-slate-100 px-3 py-2 rounded-md text-lg uppercase font-bold border-4 border-indigo-700 hover:border-slate-800">Say Hello!</button>
          </div>
        </Link>
      </div>
      <AiOutlineMenu size={40} className="md:hidden mt-[5%] mr-[3%]"/>
    </div>
  </div>
</nav>




  <main className="bg-slate-100 flex flex-col items-center justify-between p-24 mt-[15%]">
    <div className="mb-32 text-center flex flex-col items-center bg-transparent justify-center">
      <h1 className="text-5xl font-bold mb-8 text-slate-800 ">Welcome to my page!</h1>
      
      <p className="text-xl text-slate-800 p-10 max-w-[65%] mb-[6%]  rounded-md shadow-inner shadow-indigo-800">
        I'm an Army Veteran changing careers and looking to land a spot as a Web Developer. I enjoy making pages look amazing and finding ways to incorporate newly learned skills into my projects. 
      </p>
    </div>
  </main>
  <div className="bg-indigo-700">&nbsp;</div>
  <div className="bg-indigo-700">&nbsp;</div>
  <div className="bg-indigo-700">&nbsp;</div>
  <div className="bg-indigo-700">&nbsp;</div>
  <div className="bg-indigo-700">&nbsp;</div>
  <div className="bg-indigo-700">&nbsp;</div>
  <div className="bg-indigo-700">&nbsp;</div>
  <div className="bg-indigo-700">&nbsp;</div>
  <div className="bg-indigo-700">&nbsp;</div>
  <div className="bg-indigo-700">&nbsp;</div>
  <div className="bg-indigo-700">&nbsp;</div>
  <div className="bg-indigo-700">&nbsp;</div>
  <div className="bg-indigo-700">&nbsp;</div>
  <div className="bg-indigo-700">&nbsp;</div>



  <div className=" bg-slate-100 flex flex-col items-center pt-[5%] pb-[5%]">
    <div className="grid grid-cols-2 gap-8 mt-[15%] bg-slate-100 pb-[10%]">
      <div className="bg-slate-50 rounded-lg p-6 ml-[5%] shadow-lg shadow-indigo-700 mt-[-70%] mb-[20%]">
        <h2 className="text-3xl font-semibold mb-3">Boop</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales pharetra felis, sit amet malesuada augue luctus et.
        </p>
      </div>
      <div className="bg-slate-50 rounded-lg p-6 mr-[5%] shadow-lg shadow-indigo-700 mt-[-70%] mb-[20%]">
        <h2 className="text-3xl font-semibold mb-3">Beep</h2>
        <p className="text-gray-600">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sit amet venenatis odio.
        </p>
      </div>
    </div>
    <p className=" text-lg text-center content-center">Big ass paragraph! Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sit amet venenatis odio.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sit amet venenatis odio.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sit amet venenatis odio.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sit amet venenatis odio.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sit amet venenatis odio.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sit amet venenatis odio.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sit amet venenatis odio.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sit amet venenatis odio.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sit amet venenatis odio. </p>
  </div>
</div>
  );
}

