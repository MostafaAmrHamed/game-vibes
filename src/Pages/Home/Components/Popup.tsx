import React from "react";
import { BsWindows } from "react-icons/bs";
import { RiCloseLine } from "react-icons/ri";

type popup = {
  setDetails: React.Dispatch<React.SetStateAction<boolean>>;
};
const Popup = ({ setDetails }: popup) => {
  return (
    <div>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-primary-2 opacity-50"
        onClick={() => {
          setDetails(false);
        }}
      ></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-primary-2 rounded-lg">
        <div className="absolute right-5 top-2">
          <RiCloseLine
            size={32}
            className=" text-white cursor-pointer hover:scale-110"
            onClick={() => {
              setDetails(false);
            }}
          />
        </div>
        <div className="flex gap-5 p-5">
          {/* Left Side */}
          <div>
            <img
              src={"https://www.freetogame.com/g/516/thumbnail.jpg"}
              alt="Thumbnail"
              className="rounded-lg"
              height={200}
              width={300}
            />
            <div className="pt-4 px-1 grid grid-cols-3 justify-items-stretch">
              <div className="col-span-2 justify-start flex gap-1">
                <p className="text-lg bg-primary-1 text-primary-2 px-2  rounded-md ">
                  Shooter
                </p>
              </div>

              <div className="col-span-1 flex gap-1 justify-end text-primary-1">
                <BsWindows size={28} />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-[500px] text-white">
            <p className="text-2xl mb-2">ID: 458</p>
            <p className="text-2xl mb-2">PUBG: BATTLEGROUNDS</p>
            <div>
              <p className="text-lg font-light mb-2">
                <span>Description:</span> Get into the action in one of the
                longest running battle royale games PUBG Battlegrounds.
              </p>
            </div>
            <p className="text-base font-light">Release Date: 2022-01-12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
