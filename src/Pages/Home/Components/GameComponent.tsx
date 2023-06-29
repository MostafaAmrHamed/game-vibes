import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { BsWindows } from "react-icons/bs";
const GameComponent = () => {
  return (
    <div
      className="w-[365px] h-fit bg-primary-1 
    rounded-md transition-transform duration-200 hover:scale-105 hover:cursor-pointer"
    >
      <img
        src={"https://www.freetogame.com/g/516/thumbnail.jpg"}
        alt="Thumbnail"
        className="rounded-t-md rounded-b-lg shadow-lg"
      />

      <div className="p-5 flex justify-between justify-items-center">
        <p className="text-xl">PUBG: BATTLEGROUNDS</p>
        {false ? <MdFavorite size={28} /> : <MdFavoriteBorder size={28} />}
      </div>

      <div className="p-5 grid grid-cols-3">
        <div className="col-span-2 justify-start flex gap-1">
          <p className="text-lg bg-primary-2 text-primary-1 font-light px-2  rounded-md ">
            Shooter
          </p>
        </div>

        <div className="col-span-1 flex gap-1 justify-end">
          <BsWindows size={28} />
        </div>
      </div>
    </div>
  );
};

export default GameComponent;
