import React from "react";
import TopComponent from "./TopComponent";

function TopList() {
  return (
    <div className="bg-primary-1 p-5">
      <h1 className="text-3xl mb-5">TOP Games</h1>
      <div className="grid gap-4 xl:gap-2 grid-cols-1 justify-items-center sm:grid-cols-2 xl:grid-cols-4 xl:justify-around xl:ml-5 ">
        <TopComponent />
        <TopComponent />
        <TopComponent />
        <TopComponent />
      </div>
    </div>
  );
}

export default TopList;
