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
            name={"Selam"}
            photo={"/selam.jpg"}
            position={"CEO - Founder"}
          />
          <Team
            name={"Natnael Ghirma"}
            photo={"/selam.jpg"}
            position={"CEO - Founder"}
          />
          <Team
            name={"Bisrategebriel Tewedros"}
            photo={"/bisrat.jpg"}
            position={"Project Manager"}
          />
          <Team
            name={"Yohannes Seffefe"}
            photo={"/yohannes.jpg"}
            position={"Developer"}
          />
        </div>

        <div className="flex gap-5 justify-between items-center w-full md:flex-row flex-col">
          <Team
            name={"Betelehem Lemma"}
            photo={"/bethelehem.jpg"}
            position={"Developer"}
          />
          <Team name={"Eyobe "} photo={"/eyob.jpg"} position={"Developer"} />
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
