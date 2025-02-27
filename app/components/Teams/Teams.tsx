import Team from "./components/Team/Team";
import "./Teams.css";
function Teams() {
  return (
    <div className="section teams">
      <div className="flex flex-col gap-5">
        <h1 className="md:text-[45px] text-[22px] font-normal text-white">
          Teams
        </h1>
        <div className="flex gap-3 justify-between items-center w-full md:flex-row flex-col">
          <Team />
          <Team />
          <Team />
        </div>
      </div>
    </div>
  );
}

export default Teams;
