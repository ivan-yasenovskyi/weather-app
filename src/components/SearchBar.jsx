import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearchClick = () => {
    if (inputValue.trim() !== "") {
      onSearch(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="flex flex-col items-center p-7 rounded-2xl">
      <h1 className="block font-bold text-6xl tracking-wider text-white mb-8 text-center">
        Weather Forecast App
      </h1>

      <div className="mt-2 flex gap-2">
        <div className="flex items-center rounded-md bg-white/5 outline-1 -outline-offset-1 outline-gray-600 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
          <input
            id="city"
            name="city"
            type="text"
            placeholder="Enter the city..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="block w-80 min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-3 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
          />
        </div>
        <button
          onClick={handleSearchClick}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1.5 rounded-md font-medium transition-colors"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
