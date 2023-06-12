import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    pokemons = [],
    page,
  } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <div className="gallery">
        {isLoading ? (
          <span>Loading</span>
        ) : (
          <ul>
            {pokemons.map(({ name }) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        )}
      </div>

      {page != 1 && (
        <button
          disabled={isLoading}
          onClick={() => dispatch(getPokemons(page - 2))}
        >
          Previus
        </button>
      )}
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  );
};
