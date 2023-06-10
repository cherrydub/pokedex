import React, { useEffect, useState } from "react";

export default function PokeCard({ pName }) {
  const [info, setInfo] = useState({});
  const [stockImg, setStockImg] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

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
    fighting: "bg-red-300",
    ghost: "bg-purple-300",
    dark: "bg-slate-400",
    steel: "bg-gray-500",
    flying: "bg-pink-200",
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

  const imgClick = () => {
    if (stockImg === null) {
      const paddedIndex = ("00" + info.id).slice(-3);
      const image_url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
      setStockImg(image_url);
    } else {
      setStockImg(null);
    }
  };

  // const handleHover = () => {
  //   const paddedIndex = ("00" + info.id).slice(-3);
  //   const image_url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
  //   setStockImg(image_url);
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  //   setStockImg(null);
  // };

  return (
    <div
      onClick={imgClick}
      // onMouseEnter={handleHover}
      // onMouseLeave={handleMouseLeave}
      className={`${colorIndex[colorType]} hover:bg-opacity-30 ${
        isHovered ? "hover-style" : ""
      }`}
    >
      <div className="text-xs">
        #{info.id} {pName}
      </div>
      {/* <div>{info.types[0].type.name}</div> */}
      <div className="text-center">
        {stockImg ? (
          <div>
            <img src={stockImg} width={"150px"} />
          </div>
        ) : (
          <div>
            <img
              className="mx-auto d-block inline"
              src={info.sprites.front_default}
              alt=""
            />
            <img
              className="mx-auto d-block inline"
              src={info.sprites.back_default}
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
}
