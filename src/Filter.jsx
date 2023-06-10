import React from "react";

export default function Filter({ setDisplayLimit }) {
  return (
    <div className="p-2">
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
    </div>
  );
}
