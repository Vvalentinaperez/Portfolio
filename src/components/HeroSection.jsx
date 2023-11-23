import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7  lg:col-span-6  place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hola, soy Valen!
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl relative">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          </p>
        </div>
        <div className="">
          <button className="px-6 py-3 rounded-full  bg-white hover:bg-slate-200 text-black mr-4">
            Hire me
          </button>
          <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
            Download CV
          </button>
        </div>
        <div className=" col-span-5  place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#202020] w-[250px] h-[250px] lg:h-[400px] lg:w-[400px] relative overflow-hidden">
            <Image
              src="/mifoto.png"
              width={300}
              height={300}
              alt="mifoto"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
