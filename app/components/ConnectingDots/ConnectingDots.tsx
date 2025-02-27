import "./ConnectingDots.css";
function ConnectingDots() {
  return (
    <div className="section connectingDots">
      <div className="flex flex-col gap-5 md:w-1/2 w-full">
        <span className="flex md:w-[216px] w-full h-[38px] items-center justify-center bg-[#D9D9D9] rounded-full">
          Gomida Solutions
        </span>
        <h1 className="md:text-[45px] text-[22px] font-normal text-white">
          Connecting the Dots{" "}
        </h1>

        <p className="text-white text-[12px]">
          GOMIDA Solutions is a digital innovation company pioneering gamified
          engagement ecosystems. Through House of Chewata and its extended
          pillars, we integrate gaming, brands, influencers, developers, and
          communities to create a self-sustaining, interactive, and monetizable
          platform. We are not just a gaming company—we are building a gamified
          economy that reshapes how people play, engage, and earn.
        </p>
      </div>
    </div>
  );
}

export default ConnectingDots;
