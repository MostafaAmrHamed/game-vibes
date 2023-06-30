import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="mt-12 flex justify-between justify-items-center">
      <div className="text-lg lg:text-xl flex gap-10">
        <div className="flex">
          <p>Platform:</p>
          <select
            name=""
            id=""
            className="text-primary-3 bg-transparent focus:outline-none"
          >
            <option value="">All platform</option>
            <option value="">Option...</option>
            <option value="">Option...</option>
            <option value="">Option...</option>
            <option value="">Option...</option>
            <option value="">Option...</option>
          </select>
        </div>
        <div className="flex">
          <p>Genre/Tag:</p>
          <select
            name=""
            id=""
            className="text-primary-3 bg-transparent focus:outline-none"
          >
            <option value="">Shooter</option>
            <option value="">Option...</option>
            <option value="">Option...</option>
            <option value="">Option...</option>
            <option value="">Option...</option>
            <option value="">Option...</option>
          </select>
        </div>
        <div className="flex">
          <p>Sort By:</p>
          <select
            name=""
            id=""
            className="text-primary-3 bg-transparent focus:outline-none"
          >
            <option value="">Relevance</option>
            <option value="">Option...</option>
            <option value="">Option...</option>
            <option value="">Option...</option>
            <option value="">Option...</option>
            <option value="">Option...</option>
          </select>
        </div>
      </div>
      <div className="flex justify-items-center ">
        <input
          type="text"
          placeholder={`Search by "ID"`}
          className="text:lg lg:text-xl placeholder:text-background focus:placeholder:text-primary-1 hover:placeholder:text-primary-1 bg-transparent focus:outline-none transition-all ease-in-out border-b-2 border-transparent hover:border-b-2 hover:border-primary-2"
        />
        <button>
          <FiSearch
            size={"24"}
            className="font-bold rotate-90 border-r-2 border-primary-2 mt-2"
          />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
