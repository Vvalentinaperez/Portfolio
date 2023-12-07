"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 sm:text-5xl text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r  from-slate-500  to-slate-700">
              Hola, soy{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Valen",
                1000,
                "Full Stack Developer",
                1000,
                "Front end Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Front end Developer | Full Stack Developer
          </p>
          <button
            className="px-6 py-3 w-full sm:w-fit rounded-full  bg-gradient-to-br from-slate-600 via-slate-300 
          to-slate-900 hover:bg-slate-200  active:bg-slate-900 text-black mr-4 focus:outline-none focus:ring focus:border-blue-300"
          >
            <a
              href="/carta.pdf" // Reemplaza con la ruta correcta a tu archivo CV
              download="carta.pdf" // Especifica el nombre de descarga del archivo
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire Me
            </a>
          </button>
          <button
            className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-slate-600 via-slate-300 
          to-slate-900  hover:bg-slate-800 text-white mt-3"
          >
            <a
              href="/cv.pdf" // Reemplaza con la ruta correcta a tu archivo CV
              download="cv.pdf" // Especifica el nombre de descarga del archivo
              className="block bg bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 "
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </button>
        </div>

        <div className="col-span-12 sm:col-span-5 place-self-center sm:mt-0 mt-4 relative">
          <div className="rounded-full overflow-hidden mx-auto w-[300px] h-[300px] sm:w-[300px] sm:h-[300px]">
            <Image
              src="/mifoto.jpeg"
              width={300}
              height={300}
              alt="mifoto"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
