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
            GOMIDA Solutions is a pioneering technology company that leverages
            gamification to create interactive experiences for users while
            providing brands and influencers with new ways to engage and
            monetize. Through our House of Chewata platform, we develop
            hyper-casual, skill-based games that entertain, educate, and reward
            players—all seamlessly integrated into Telegram!
          </p>
        </div>
      </div>
      <div className="flex items-start justify-between md:h-[700px] h-auto md:w-1/2 w-full  rounded-[20px] flex-col gap-4">
        <div className="flex bg-white flex-col  justify-between  md:h-[350px] h-auto rounded-[20px] p-[20px] w-full ">
          <h1 className="text-black text-[45px] font-normal">02</h1>
          <div className="flex flex-col gap-3">
            <h1 className="text-black text-[25px] font-normal">Why GOMIDA? </h1>
            <p className="text-black text-[13px] gap-3 font-normal text-left flex items-start justify-start">
              <span>✔</span>{" "}
              <span>
                Skill-Based, No Luck, No Betting – Our games reward skill and
                strategy, eliminating gambling mechanics.
              </span>
            </p>
            <p className="text-black text-[13px] gap-3 font-normal text-left flex items-start justify-start">
              <span>✔</span>
              <span>
                {" "}
                Monetization for Developers & Influencers – A sustainable
                revenue model that empowers creators.
              </span>
            </p>

            <p className="text-black text-[13px] gap-3 font-normal text-left flex items-start justify-start">
              <span>✔</span>
              <span>
                Gamified Marketing for Brands – Transforming passive ads into
                interactive engagement.
              </span>
            </p>
            <p className="text-black text-[13px] gap-3 font-normal text-left flex items-start justify-start">
              <span>✔</span>
              <span>
                Seamless Integration – No app downloads required; everything
                runs within familiar messaging ecosystems.
              </span>
              <br />
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
              To revolutionize digital engagement by turning everyday actions
              into rewarding experiences, ensuring entertainment meets impact.
              Play- learn and earn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
