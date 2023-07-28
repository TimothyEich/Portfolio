//import Image from 'next/image'
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";




export default function Home() {
  return (
<div className=" bg-gradient-to-r from-[#55017c] from-35% via-[#fe653b] via-50% to-[#55017c] to-65%">
<nav className="bg-gradient-to-r from-[#55017c] from-35% via-[#fe653b] via-50% to-[#55017c] to-65%">
  <div className="max-w-[100%] mx-auto sm:px-6 lg:px-8">
    <div className="flex justify-between ">
      <div className="">
        <Link href="/">
          <img className="max-w-[30%] h-auto justify-self-start mt-[4%] hover:opacity-[30] hover:max-w-[35%] " src="/TE-Logo.png" alt="Logo"/> 
        </Link>
      </div>
      <div className="hidden md:flex space-x-2 mr-[2%] mt-[3%] "> 
        <Link href="/Mentor">
          <div className="button-container inline-block">
            <button className="bg-[#230444] text-[#ee3c92] hover:bg-[#230444] hover:text-slate-100 px-3 py-2 text-lg rounded-md uppercase font-bold shadow-md shad shadow-[#e40088] border-4 border-[#230444] hover:border-[#ee3c92]">Mentoring</button>
          </div>
        </Link>
        <Link href="/Contact">
          <div className="button-container inline-block flex-shrink-0">
            <button className="bg-[#230444] text-[#ee3c92] hover:bg-[#230444] hover:text-slate-100 px-3 py-2 rounded-md text-lg uppercase font-bold border-4 border-[#230444] hover:border-[#ee3c92] shadow-md shadow-[#e40088]">Say Hello!</button>
          </div>
        </Link>
      </div>
      <AiOutlineMenu size={40} className="text-[#ee3c92] md:hidden mt-[5%] mr-[3%]"/>
    </div>
  </div>
</nav>




  <main className="bg-gradient-to-r from-[#55017c] from-35% via-[#fe653b] via-50% to-[#55017c] to-65% flex flex-col items-center justify-between p-24 mt-[5%]">
    <div className="mb-32 text-center flex flex-col items-center bg-transparent justify-center bg-[#230444] pt-10 shadow-2xl shadow-[#fe653b]">
      <h1 className="text-5xl font-bold mb-8 text-[#c7d5f9] decoration-4">Welcome to my page!</h1>
      
      <p className="text-xl text-[#c7d5f9] p-10 max-w-[65%] mb-[6%]  rounded-md shadow-2xl shadow-[#e40088] bg-[#230444] bg-opacity-80 ">
      Hello there, and thank you for visiting my digital abode! I am thrilled to welcome you to my portfolio showcase, where I invite you to embark on a journey through my world of creativity, passion, and innovation. If you have any questions please feel free to reach out! 
      </p>
    </div>
  </main>




  <header className="flex flex-col items-center py-15">
  <div className="bg-[#fe653b] bg-opacity-30 shadow-2xl shadow-[#e40088] max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-20 py-10 px-20 bg-transparent pb-10">
    <article className="bg-[#230444] bg-opacity-80 rounded-lg p-6 shadow-xl shadow-[#e40088] mr-[10%]">
      <h2 className="text-3xl font-semibold mb-3 text-[#e40088] text-center">Who am I?</h2>
      <p className="text-[#c7d5f9] text-center">
        I'm a versatile and enthusiastic developer with a deep-rooted love for all things creative, scientific exploration, and sports.
      </p>
    </article>
    <article className="bg-[#230444] bg-opacity-80 rounded-lg p-6 shadow-xl shadow-[#e40088] ml-[10%]">
      <h2 className="text-3xl font-semibold mb-3 text-[#e40088] text-center">My Purpose</h2>
      <p className="text-[#c7d5f9] text-center">
        Every project I undertake is infused with dedication, meticulous attention to detail, and a relentless pursuit of excellence.
      </p>
    </article>
    <article className="bg-[#230444] bg-opacity-80 rounded-lg p-6 shadow-xl shadow-[#e40088] mr-[10%]">
      <h2 className="text-3xl font-semibold mb-3 text-[#e40088] text-center">Expectations</h2>
      <p className="text-[#c7d5f9] text-center">
        Anticipate an ambitious and diligent learner constantly delving into novel approaches to tackle challenging problems with unwavering dedication.
      </p>
    </article>
    <article className="bg-[#230444] bg-opacity-80 rounded-lg p-6 shadow-xl shadow-[#e40088] ml-[10%]">
      <h2 className="text-3xl font-semibold mb-3 text-[#e40088] text-center">Connect</h2>
      <p className="text-[#c7d5f9] text-center">
        Discover inspiration in my portfolio and embark on a collaborative journey to transform your visions into impactful reality. Let's work together!
      </p>
    </article>
  </div>
</header>

</div>
  );
}

