import React, { useState } from "react";
// import "./StarterPoke.css";

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
    <div className="p-2">
      <div>
        Choose your starter pokemon
      </div> 

      <div className="flex items-center pt-3 ">
      {region === "Kanto" && (
        <div className="flex flex-row mx-auto space-x-2 sm:space-x-7 sm:p-4 md:space-x-7 md:p-4">
          {Kanto.map((e) => (
            <img
              src={e.img}
              key={e.name}
              alt={e.name}
              onClick={() => handleSelect(e.name)}
              className={
                e.name === selected ? 
                "h-24 w-24 p-2 bg-gray-50 border-2 rounded-full border-[#ff5349] cursor-pointer" 
                : 
                "h-24 w-24 p-2 bg-gray-50 border-2 rounded-full cursor-pointer hover:border-[#ff5349]"
              }
            />
          ))}
        </div>
      )}

      {region === "Jhoto" && (
        <div className="flex flex-row mx-auto space-x-2 sm:space-x-7 sm:p-4 md:space-x-7 md:p-6">
          {Jhoto.map((e) => (
            <img
              src={e.img}
              key={e.name}
              alt={e.name}
              onClick={() => handleSelect(e.name)}
              className={
                e.name === selected ? 
                "h-24 w-24 p-2 bg-gray-50 border-2 rounded-full border-[#ff5349]" 
                : "h-24 w-24 p-2 bg-gray-50 border-2 rounded-full cursor-pointer hover:border-[#ff5349]"
              }
            />
          ))}
        </div>
      )}

      {region === "Hoenn" && (
        <div className="flex flex-row mx-auto space-x-2 sm:space-x-7 sm:p-4 md:space-x-7 md:p-6">
          {Hoenn.map((e) => (
            <img
              src={e.img}
              key={e.name}
              alt={e.name}
              onClick={() => handleSelect(e.name)}
              className={
                e.name === selected ? 
                "h-24 w-24 p-2 bg-gray-50 border-2 rounded-full border-[#ff5349]" 
                : "h-24 w-24 p-2 bg-gray-50 border-2 rounded-full cursor-pointer hover:border-[#ff5349]"
              }
            />
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default StarterPoke;
