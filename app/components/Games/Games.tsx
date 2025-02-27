import GameBox from "./components/GameBox/GameBox";
import "./Games.css";

function Games() {
  return (
    <>
      <div className="section gameheader  gap-5">
        {/* <h1 className="text-[35px] text-white w-1/2 leading-[36px] ">
          Ecosystem: The Six Houses of GOMIDA Solutions
        </h1> */}
      </div>
      <div className=" gamescontraier flex items-center justify-center gap-5 md:flex-row flex-col">
        <GameBox
          title={"House of Chewata"}
          text={
            "The core gamification platform, hosting hyper-casual, play-to-earn games that are easy to access and rewarding."
          }
        />

        <GameBox
          title={"House of Champions "}
          text={
            "A developer-driven hub where we organize hackathons and competitions to crowdsource innovation, bringing new talent and fresh ideas into our ecosystem."
          }
        />
        <GameBox
          title={"House of Influencers"}
          text={
            "A network of digital ambassadors who amplify engagement by promoting gamified content, driving user participation, and unlocking new revenue models through social-led gaming experiences."
          }
        />
      </div>

      <div className=" gamescontraier flex items-center justify-center gap-5 md:flex-row flex-col">
        <GameBox
          title={"House of Brands"}
          text={
            "A brand gamification engine, enabling businesses to connect with audiences through interactive campaigns. Brands sponsor games, offer rewards, and create immersive customer experiences"
          }
        />

        <GameBox
          title={"House of Digitization "}
          text={
            "A platform for skill-based content where we digitize and gamify learning experiences, making education and training interactive, fun, and reward-driven."
          }
        />

        <GameBox
          title={""}
          text={
            "A user engagement powerhouse, focused on building, managing, and sustaining a loyal player base. We transform users into an active gaming community that drives retention and growth."
          }
        />
      </div>
    </>
  );
}

export default Games;
