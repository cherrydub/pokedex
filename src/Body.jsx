import React, { useEffect } from "react";
import PokeCard from "./components/PokeCard";

export default function Body({ allPokemon }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {allPokemon.map((pokemon) => {
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
