import { useEffect } from "react";
import * as C from "../Pokemons/styles";

const Pokemons = () => {
  return (
    <C.Container>
      <C.Area>
        <C.Header> Pokemons mais fáceis do dia! </C.Header>
        <C.Show>
          <C.Card1 />
          <C.Card2 />
          <C.Card3 />
        </C.Show>
      </C.Area>
    </C.Container>
  );
};

export default Pokemons;
