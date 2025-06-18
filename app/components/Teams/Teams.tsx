import Team from "./components/Team/Team";
import "./Teams.css";
function Teams() {
  return (
    <div className="section teams">
      <div className="flex flex-col gap-5">
        <h1 className="md:text-[45px] text-[22px] font-normal text-white">
          Teams
        </h1>
        <div className="flex gap-5 justify-between items-center w-full md:flex-row flex-col">
          <Team
            name={"Selam Wondim Gebremedhin"}
            photo={"/selam.jpg"}
            position={"CEO - Founder"}
          />
          <Team name={"Natnael Ghirma"} photo={"/nati.jpg"} position={"CTO"} />
          <Team
            name={"Haimanot Haile"}
            photo={"/haymanot.jpg"}
            position={"Head of Resource Management"}
          />
          <Team
            name={"Bisrategebriel Tewedros"}
            photo={"/bisrat.jpg"}
            position={"Project Manager"}
          />
        </div>

        <div className="flex gap-5 justify-between items-center w-full md:flex-row flex-col">
          <Team
            name={"Betelehem Lemma"}
            photo={"/bethelehem.jpg"}
            position={"Developer"}
          />
          <Team
            name={"Yohannes Seffefe"}
            photo={"/yohannes.jpg"}
            position={"Developer"}
          />

          <Team
            name={"Munir Burhan"}
            photo={"/munir.jpg"}
            position={"Advisor"}
          />
          <Team
            name={"Eden Berihun"}
            photo={"/eden.jpg"}
            position={"Advisor"}
          />
        </div>
      </div>
    </div>
  );
}

export default Teams;
