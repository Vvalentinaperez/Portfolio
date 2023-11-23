import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "We produce food for Mice",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "We produce food for Hamsters",
        1000,
        "We produce food for Guinea Pigs",
        1000,
        "We produce food for Chinchillas",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 sm:text-5xl text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r  from-slate-500  to-slate-700">
              Hola, soy{" "}
            </span>
            Valen!
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          </p>
          <button
            className="px-6 py-3 w-full sm:w-fit rounded-full  bg-gradient-to-br from-slate-600 via-slate-300 
          to-slate-900 hover:bg-slate-200 text-black mr-4 "
          >
            Hire me
          </button>
          <button
            className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-slate-600 via-slate-300 
          to-slate-900  hover:bg-slate-800 text-white mt-3"
          >
            <span className="block bg bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
              Download CV
            </span>
          </button>
        </div>
        <div>
          <div className=" col-span-5  place-self-center mt-4 lg:mt-0 ">
            <div className="rounded-full bg-[#202020] w-[250px] h-[250px] lg:h-[400px] lg:w-[400px] relative overflow-hidden">
              <Image
                src="/mifoto.png"
                width={300}
                height={300}
                alt="mifoto"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
