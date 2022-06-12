import React, { useState } from "react";
import "./StarterPoke.css";
const Kanto = [
  {
    name: "Bulbasaur",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  },
  {
    name: "Charmander",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
  },
  {
    name: "Squirtle",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
  }
];
const Jhoto = [
  {
    name: "Chikorita",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png"
  },
  {
    name: "Cyndaquil",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png"
  },
  {
    name: "Totodyle",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png"
  }
];
const Hoenn = [
  {
    name: "Treeko",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png"
  },
  {
    name: "Torchik",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png"
  },
  {
    name: "Mudkip",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png"
  }
];
const StarterPoke = ({ region, poke, setPoke }) => {
  const [selected, setSelected] = useState("");

  const handleSelect = (name) => {
    setPoke(name);
    setSelected(name);
  };

  return (
    <div>
      <div style={{textAlign:'left',marginLeft:'100px'}}>Choose your starter pokemon</div>  
      {region === "Kanto" && (
        <div>
          {Kanto.map((e) => (
            <img
              src={e.img}
              key={e.name}
              alt={e.name}
              onClick={() => handleSelect(e.name)}
              className={
                e.name === selected ? "select-poke-region" : "poke-region"
              }
            />
          ))}
        </div>
      )}

      {region === "Jhoto" && (
        <div>
          {Jhoto.map((e) => (
            <img
              src={e.img}
              key={e.name}
              alt={e.name}
              onClick={() => handleSelect(e.name)}
              className={
                e.name === selected ? "select-poke-region" : "poke-region"
              }
            />
          ))}
        </div>
      )}

      {region === "Hoenn" && (
        <div>
          {Hoenn.map((e) => (
            <img
              src={e.img}
              key={e.name}
              alt={e.name}
              onClick={() => handleSelect(e.name)}
              className={
                e.name === selected ? "select-poke-region" : "poke-region"
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StarterPoke;
