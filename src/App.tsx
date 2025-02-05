import PokemonItem from './PokemonItem';
import { useState } from 'react';

function createPokemon(id: number) {
  return {
    id: id,
    name: 'pokemon',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  };
}

function createPokemons(offset: number, count: number) {
  return [...new Array(count)].map((v, i) => createPokemon(offset + i));
}

function App() {
  const [count, setCount] = useState(5);
  const pokemons = createPokemons(1, count);

  return (
    <>
      <header className="header">Pokedex</header>
      <main className="main">
        <div className="tools">
          <button className="show-more" onClick={() => setCount(count + 3)}>
            Voir plus
          </button>
          <button className="show-more" onClick={() => setCount(5)}>
            Reset
          </button>
          <div className="shiny">
            <label htmlFor="shiny-checkbox">shiny</label>
            <input id="shiny-checkbox" type="checkbox" />
          </div>
        </div>
        <div className="list">
          {pokemons.map((pokemon) => (
            <PokemonItem
              id={pokemon.id}
              label={pokemon.name}
              url={pokemon.url}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
