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
            "Our flagship gaming ecosystem, where users play skill-based games, earn rewards, and brands integrate into gamified experiences."
          }
        />

        <GameBox
          title={"House of Champions "}
          text={
            "A hub for developers, fostering innovation through hackathons, competitions, and monetization opportunities."
          }
        />
        <GameBox
          title={"House of Influencers"}
          text={
            " A platform for digital creators to co-own games, engage their audience, and create new revenue streams."
          }
        />
      </div>

      <div className=" gamescontraier flex items-center justify-center gap-5 md:flex-row flex-col">
        <GameBox
          title={"House of Brands"}
          text={
            "Helping businesses gamify their campaigns for higher engagement and brand recall."
          }
        />

        <GameBox
          title={"House of Digitization "}
          text={
            "Transforming skill-based content into interactive learning experiences."
          }
        />

        <GameBox
          title={"House of Community"}
          text={
            "Building and managing an engaged user base through community-driven experiences."
          }
        />
      </div>
    </>
  );
}

export default Games;
