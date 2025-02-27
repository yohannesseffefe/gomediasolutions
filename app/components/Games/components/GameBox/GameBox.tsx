import "./GameBox.css";

function GameBox({ title, text }: any) {
  return (
    <div className="flex flex-col justify-center items-center text-white octagon md:p-[50px]">
      {/* <div></div> */}
      <div>
        <h1 className="text-[28px] text-center">{title}</h1>
        <p className="text-[13px] w-[300px]  text-center">{text}</p>
      </div>
    </div>
  );
}

export default GameBox;
