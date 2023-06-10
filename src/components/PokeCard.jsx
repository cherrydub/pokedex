import React, { useEffect, useState } from "react";

export default function PokeCard({ pName }) {
  const [info, setInfo] = useState({});

  const colorIndex = {
    grass: "bg-green-200",
    fire: "bg-red-200",
    water: "bg-blue-200",
    bug: "bg-orange-200",
    normal: "bg-gray-200",
    poison: "bg-purple-200",
    electric: "bg-yellow-200",
    ground: "bg-stone-200",
    fairy: "bg-pink-200",
    psychic: "bg-indigo-200",
    dragon: "bg-red-200",
    rock: "bg-slate-200",
    ice: "bg-teal-200",
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pName}`)
      .then((result) => result.json())
      .then((data) => setInfo(data));
  }, [pName]);

  if (Object.keys(info).length === 0) {
    return <div>Loading...</div>;
  }

  const colorType = info.types[0].type.name;

  return (
    <div className={colorIndex[colorType]}>
      <br />
      <div>{pName}</div>
      <div>{"id: " + info.id}</div>
      <div>{"types: " + info.types[0].type.name}</div>
      <div>
        <img src={info.sprites.front_default} alt="" />
      </div>
      <br />
    </div>
  );
}
