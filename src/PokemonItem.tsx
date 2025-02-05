interface PokemonItemProps {
  id: number;
  label: string;
  url: string;
}

function PokemonItem(props: PokemonItemProps) {
  return (
    <>
      <div className="item">
        #{props.id} {props.label}
        <img className="icon" src={props.url} />
      </div>
    </>
  );
}

export default PokemonItem;
