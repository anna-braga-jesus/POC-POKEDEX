import * as C from "./App.styles";
import { Item } from "./types/Item";
import { AddArea } from "./components/Add Area";
import { useState } from "react";
import { ListItem } from "./components/ListItem";
import pokebola from "/home/driven/DRIVEN/POC-POKEDEX/pokedex/src/pokebol.gif";
import { Link } from "react-router-dom";
const MyList = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Azelf", done: false },
    { id: 2, name: "Pikachu", done: true },
  ]);
  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>
          Lista de pokemons caçados
          <Link to="/pokemon">
            <img src={pokebola} alt="" />
          </Link>
        </C.Header>
        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} onChange={handleTaskChange} />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default MyList;
