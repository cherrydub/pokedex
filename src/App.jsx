import { useEffect, useState } from "react";

import "./App.css";
import Header from "./Header";
import PokeResult from "./PokeResult";
import Filter from "./Filter";
import Body from "./Body";

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [displayLimit, setDisplayLimit] = useState(151);
  const [searchFilter, setSearchFilter] = useState("");
  const [colCount, setColCount] = useState(3);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${displayLimit}`)
      .then((result) => result.json())
      .then((data) => setAllPokemon(data.results));
  }, [displayLimit]);

  const filteredPokemon = allPokemon.filter((eachPokemon) => {
    if (searchFilter === undefined) {
      return eachPokemon;
    }
    return eachPokemon.name.toLowerCase().includes(searchFilter);
  });

  return (
    <>
      <Header />
      {console.log(colCount)}

      <PokeResult />
      <Filter
        setDisplayLimit={setDisplayLimit}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        setColCount={setColCount}
      />
      <div className="body-container">
        <Body
          colCount={colCount}
          allPokemon={allPokemon}
          filteredPokemon={filteredPokemon}
        />
      </div>
    </>
  );
}

export default App;
