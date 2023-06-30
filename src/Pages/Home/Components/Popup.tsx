import React from "react";

const Popup = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-primary-2 opacity-50 overflow-hidden">
      <div className="flex w-[500px] h-[350px] mx-auto top-1/2 bg-slate-300 bg-opacity-100">
        <img
          src={"https://www.freetogame.com/g/516/thumbnail.jpg"}
          alt="Thumbnail"
          className="rounded-lg w-[365px] h-[200px] bg-contain"
        />
      </div>
    </div>
  );
};

export default Popup;
