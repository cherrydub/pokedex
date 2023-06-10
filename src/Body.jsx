import React, { useEffect } from "react";
import PokeCard from "./components/PokeCard";

export default function Body({ allPokemon, filteredPokemon, colCount }) {
  return (
    <div className={`flex flex-wrap gap-1 justify-center`}>
      {filteredPokemon.map((pokemon) => {
        const pName = pokemon.name;
        return (
          <>
            <PokeCard pName={pName} />
          </>
        );
      })}
    </div>
  );
}
