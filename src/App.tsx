import * as C from "./App.styles";
import React from "react";
//import { GlobalStyle } from "../assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyList from "./MyList";
import Pokemons from "./types/Pokemons/Pokemons";
import Catalog from "./types/Catalog/Catalog";

const App = () => {
  return (
    <>
      {/* <GlobalStyle /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/list" element={<MyList />} />
          {/* <Route path='/pokemons/list' element = {<View />} /> */}
          <Route path="/pokemons" element={<Pokemons />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
