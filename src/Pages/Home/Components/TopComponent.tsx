import React from "react";

const TopComponent = () => {
  return (
    <div className="bg-primary-2 text-primary-1 w-[250px] h-[200px] hover:bg-background hover:text-primary-2 transition-all ease-in-out hover:scale-105 xl:hover:-translate-y-4  duration-300 cursor-pointer">
      <img src="https://www.freetogame.com/g/3/thumbnail.jpg" alt="thumbnail" />
      <p className=" text-center text-3xl m-5 leading-4">Warframe</p>
    </div>
  );
};

export default TopComponent;
