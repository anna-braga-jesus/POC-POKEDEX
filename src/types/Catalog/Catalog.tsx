import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
//import MyButton from "../../components/Button/Button";
import * as C from "./styles";

const Catalog = () => {
  //const { user } = useContext(AppContext);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((json) => {
        setPokemons(json.results);
      });
  }, []);

  if (!pokemons) {
    return null;
  }
  return (
    <>
      <C.Container>
        <C.Area>
          <C.Header> Catálogo de Pokemons </C.Header>
          <C.Show>
            <ul className="PokemonList">
              {pokemons.map(({ name }) => (
                <li key={name}>
                  <Link to={`/pokemons/${name}`}>{name}</Link>
                  {/* <span className="PokemonList__label">NOVO</span> */}
                </li>
              ))}
            </ul>
            {/* <MyButton
              // theme="dark"
              onClick={() => console.log("clicked")}
              // options={{ variant }}
            >
              Entrar
            </MyButton> */}
          </C.Show>
        </C.Area>
      </C.Container>
    </>
  );
};

export default Catalog;
