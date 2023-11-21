import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hola, mi nombre es Valen
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            ipsam libero dolorum placeat rem iure voluptatibus.
          </p>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <Image
            src="/mifoto.jpeg"
            width={300}
            height={300}
            alt="mifoto"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-52 h-52 rounded-full overflow-hidden "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
