import React from "react";
import Pic1 from "../../Assets/Images/character 1.png";
import { TopList, SearchBar, GameComponent } from "./Components/index";
import Popup from "./Components/Popup";
const Home = () => {
  return (
    <div className="">
      {/* Header */}
      <div className="grid grid-cols-2 text-center items-center	">
        <div className="text-center">
          <h1 className="text-primary-3 font-bold text-4xl pb-5">
            Get Your Game On
          </h1>
          <p className="text-3xl font-medium leading-relaxed">
            Browse Our Extensive Collection of the Hottest Games <br /> for
            <span className="text-primary-3"> Gamers</span> of All Levels!
          </p>
        </div>
        <div className="">
          <img src={Pic1} alt="character pic" />
        </div>
      </div>

      {/* Top Games */}
      <TopList />

      {/* Search bar */}
      <SearchBar />

      {/* Game List */}
      <div className="mt-12 mb-5 flex flex-wrap justify-around gap-5">
        <GameComponent />
        <GameComponent />
        <GameComponent />
        <GameComponent />
        <GameComponent />
      </div>

      <Popup />
    </div>
  );
};

export default Home;
