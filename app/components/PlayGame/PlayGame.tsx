import Button from "../Button/Button";
import "./PlayGame.css";

function PlayGame() {
  return (
    <div className="section playgame flex justify-center items-center">
      <div className="md:w-[498px] w-full md:h-[652px] h-[470px] bg-mobile flex items-start justify-end md:pr-[40px]">
        <div className="md:w-[250px] md:h-[512px] w-[220px] h-[400px]   flex flex-col md:p-[20px] items-center justify-center">
          <Button title={"Play Game"} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}

export default PlayGame;
