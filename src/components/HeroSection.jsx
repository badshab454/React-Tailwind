import Typed from "react-typed";

const HeroSection = () => {
  return (
    <div className="bg-black py-20">
      <div className="max-w-[80%] mx-auto text-center pt-12 text-white">
        <p className="uppercase text-[#00df9a] font-bold">
          growing with data analytics
        </p>
        <h1 className="text-4xl md:text-7xl sm:text-6xl mt-2">
          Grow with data.
        </h1>
        <div className="flex justify-center">
          <p className="pt-4 pr-2 text-xl">Fast, flexible financing for </p>
          <Typed
            className="pt-4 text-xl text-[#00df9a]"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="pt-3 text-gray-400">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="rounded-md text-black font-medium bg-[#00df9a] py-2 px-4 mt-4">
          <a href="#">Get Started</a>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
