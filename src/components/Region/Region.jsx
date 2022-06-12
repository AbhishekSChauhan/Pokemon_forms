import React, { useEffect } from "react";
import Selection from "../Select/Select";
import Slide from "../Slider/Slider";
import StarterPoke from "../StarterPoke/StarterPoke";

const options = [
  {
    label: "Kanto",
    value: "Kanto"
  },
  {
    label: "Jhoto",
    value: "Jhoto"
  },
  {
    label: "Hoenn",
    value: "Hoenn"
  }
];
const Region = ({
  region,
  setRegion,
  distance,
  setDistance,
  poke,
  setPoke
}) => {
  useEffect(() => {
    if (region) {
      setPoke("");
    }
  }, [region, setPoke]);

  return (
    <div>
      <Slide value={distance} setValue={setDistance} min={1} max={100} />
      <div>How far is your nearest pokemon center?(in KMs)</div>

      <Selection
        options={options}
        value={region}
        setValue={setRegion}
        defaultValue={"What's your starting region?"}
      />

      <StarterPoke region={region} poke={poke} setPoke={setPoke} />
    </div>
  );
};

export default Region;
