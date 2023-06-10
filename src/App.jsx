import { useEffect, useState } from "react";

import "./App.css";
import Header from "./Header";
import PokeResult from "./PokeResult";
import Filter from "./Filter";
import Body from "./Body";

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [displayLimit, setDisplayLimit] = useState(151);
  // const [pokeName, setPokeName] = useState(null);
  // const [pokeInfo, setPokeInfo] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${displayLimit}`)
      .then((result) => result.json())
      .then((data) => setAllPokemon(data.results));
  }, [displayLimit]);

  // useEffect(() => {
  //   fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
  //     .then((result) => result.json())
  //     .then((data) => setPokeInfo(data));
  // }, [pokeName]);

  return (
    <>
      {/* {console.log(allPokemon[0])} */}

      <Header />
      <PokeResult />
      <Filter setDisplayLimit={setDisplayLimit} />
      <Body allPokemon={allPokemon} />
    </>
  );
}

export default App;
