import React from "react";

export default function Filter({
  setDisplayLimit,
  setSearchFilter,
  searchFilter,
  colCount,
  setColCount,
}) {
  const filterChange = (event) => {
    setSearchFilter(event.target.value);
  };

  const resetChange = (event) => {
    event.preventDefault();
    setSearchFilter("");
  };

  return (
    <div className="p-2 text-center">
      <button
        className="hover:bg-white hover:text-black border hover:border-black border-white font-bold bg-black text-white p-2"
        onClick={() => setDisplayLimit(151)}
      >
        151
      </button>
      <button
        className="hover:bg-white hover:text-black border hover:border-black border-white font-bold bg-black text-white p-2"
        onClick={() => setDisplayLimit(999)}
      >
        999
      </button>

      <div className="flex">
        <div className="flex-grow "></div>
        <div className="flex-grow  flex items-center justify-center">
          <form action="" className="mt-2">
            <input
              value={searchFilter}
              onChange={filterChange}
              className="border border-black"
              type="text"
            />
            <button
              type="button"
              onClick={resetChange}
              className="border border-black px-1 hover:text-red-600 hover:border-red-600"
            >
              reset
            </button>
          </form>
        </div>
        <div className="flex-grow ">
          {/* <select
            onChange={(event) => setColCount(Number(event.target.value))}
            value={colCount}
            id=""
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select> */}
        </div>
      </div>
    </div>
  );
}
