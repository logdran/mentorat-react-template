import { NamedAPIResource, Pokemon } from 'pokenode-ts';
import { getPokemons } from './pokemonApi';
import PokemonItem from './PokemonItem';
import { useEffect, useRef, useState } from 'react';

//function createPokemon(id: number) {
//  return {
//    id: id,
//    name: 'pokemon',
//    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
//  };
//}

//function createPokemons(offset: number, count: number) {
//  return [...new Array(count)].map((v, i) => createPokemon(offset + i));
//}

function App() {
  const [pokemons, setPokemons] = useState<string[]>([]);
  const [limit, setLimit] = useState(10);
  const listRef = useRef<HTMLDivElement>(null);

  function mapToPokemon(resource: NamedAPIResource) {
    console.log(resource);
    return resource.name;
  }

  function mapToPokemons(resources: NamedAPIResource[]) {
    return resources.map((resource) => mapToPokemon(resource));
  }

  useEffect(() => {
    getPokemons(limit, 0).then((result) => {
      setPokemons(mapToPokemons(result));
    });
  }, [limit]);

  return (
    <>
      <header className="header">Pokedex</header>
      <main className="main">
        <div className="tools">
          <button
            className="show-more"
            onClick={() => {
              setLimit((previous) => previous + 5);
            }}
          >
            Voir plus
          </button>
          <button className="show-more" onClick={() => setLimit(10)}>
            Reset
          </button>
          <div className="shiny">
            <label htmlFor="shiny-checkbox">shiny</label>
            <input id="shiny-checkbox" type="checkbox" />
          </div>
        </div>
        <div className="list" ref={listRef}>
          {pokemons.map((pokemon) => (
            <PokemonItem key={pokemon} name={pokemon} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
