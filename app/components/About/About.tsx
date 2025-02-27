import "./About.css";

function About() {
  return (
    <div className="section flex md:flex-row flex-col justify-center items-center gap-7">
      <div className="flex items-start justify-between md:h-[700px] h-auto md:w-1/2 w-full bg-[#545061] p-[20px] rounded-[20px] flex-col">
        <h1 className="text-white md:text-[90px] text-[45px] font-normal">
          01
        </h1>
        <div className="flex flex-col gap-5">
          <h1 className="text-white md:text-[45px] text-[22px] font-normal">
            Who we are
          </h1>
          <p className="text-white md:text-[13px] font-normal text-left">
            We are the next-generation gaming and engagement company
            revolutionizing how brands, influencers, and players interact.
            Through our flagship platform, House of Chewata, we create
            hyper-casual, skill-based games that entertain, educate, and reward.
            Our platform seamlessly integrates gaming, brand engagement, and
            influencer collaborations, turning everyday play into meaningful
            interactions and monetization opportunities.With a focus on Africa,
            the Middle East, and beyond, we are building a gamified
            super-platform that connects users through innovative,
            purpose-driven digital experiences—without the need for additional
            downloads.
          </p>
        </div>
      </div>
      <div className="flex items-start justify-between md:h-[700px] h-auto md:w-1/2 w-full  rounded-[20px] flex-col gap-4">
        <div className="flex bg-white flex-col  justify-between  md:h-[350px] h-auto rounded-[20px] p-[20px] w-full ">
          <h1 className="text-black text-[45px] font-normal">02</h1>
          <div className="flex flex-col gap-5">
            <h1 className="text-black text-[25px] font-normal">&nbsp;</h1>
            <p className="text-black text-[13px] font-normal text-left">
              A next-generation gaming and engagement company revolutionizing
              how brands, influencers, and players interact. Through our
              flagship platform, House of Chewata, we create hyper-casual,
              skill-based games that entertain, educate, and reward. Our
              platform seamlessly integrates gaming, brand engagement, and
              influencer collaborations, turning everyday play into meaningful
              interactions and monetization opportunities.With a focus on
              Africa, the Middle East, and beyond, we are building a gamified
              super-platform that connects users through innovative,
              purpose-driven digital experiences—without the need for additional
              downloads.
            </p>
          </div>
        </div>
        <div className="flex flex-col border-solid justify-between border-[2px] md:h-[317px] rounded-[20px] p-[20px] w-full border-[#CAC8C1]">
          <h1 className="text-[#D9D9D9] text-[45px] font-normal">03</h1>
          <div className="flex flex-col gap-5">
            <h1 className="text-[#D9D9D9] text-[25px] font-normal">
              Our vision
            </h1>
            <p className="text-[#D9D9D9] text-[13px] font-normal text-left">
              To become the leading gamified engagement ecosystem, bridging the
              gap between players, brands, and influencers through immersive
              digital experiences. We envision a future where gaming is more
              than just entertainment—it’s a tool for education, engagement, and
              economic empowerment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
