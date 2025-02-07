import { Pokemon } from 'pokenode-ts';
import { useEffect, useState } from 'react';
import { getPokemon } from './pokemonApi';

interface PokemonItemProps {
  name: string;
}

function PokemonItem(props: PokemonItemProps) {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    getPokemon(props.name).then((result) => {
      console.log(result);
      setPokemon(result);
    });
  }, []);

  return (
    <>
      <div className="item">
        #{pokemon?.id ?? '-'} {pokemon?.name}
        <img
          className="icon"
          src={pokemon?.sprites.front_default ?? undefined}
        />
      </div>
    </>
  );
}

export default PokemonItem;
