//import Image from 'next/image'
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";


export default function Home() {
  return (
<div>
<nav className="bg-transparent h-24">
  <div className="max-w-[25] mx-auto px-2 sm:px-6 lg:px-8">
    <div className="flex justify-between">
      <div className="">
          <Link href="#">
          <img className="max-w-[30%] h-auto justify-self-start mt-[4%]" src="/TE-Logo.png" alt="Logo"/> 
          </Link>
      </div>
      <div className="hidden md:block ml-auto">
        <div className="pt-[15%] ">
          <a href="mentor" className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg uppercase font-bold ">Mentorship</a>
          <a href="contact" className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg uppercase font-bold ">Say Hello!</a>
        </div>
      </div>
      <AiOutlineMenu size={40} className="md:hidden mt-[5%] mr-[3%]"/>
    </div>
  </div>
</nav>


  <main className="flex flex-col items-center justify-between p-24 mt-[6%]">
    <div className="mb-32 text-center bg-transparent">
      <h1 className="text-5xl font-bold mb-6">Welcome to My Portfolio!</h1>
      
      
      <p className="text-xl text-gray-600 bg-slate-50 rounded-lg shadow-md p-6">
        Blah blah blah. Here is a small intro about myself to gather your attention.
      </p>
    </div>
  </main>
    <div className="grid grid-cols-2 gap-8">
      <div className="bg-slate-50 rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-semibold mb-3">Boop</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales pharetra felis, sit amet malesuada augue luctus et.
        </p>
      </div>
      <div className="bg-slate-50 rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-semibold mb-3">Beep</h2>
        <p className="text-gray-600">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sit amet venenatis odio.
        </p>
      </div>
    </div>

    <div className="mt-24">
      <img
        src="/image.jpg"
        alt="Image"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  
</div>
  );
}
