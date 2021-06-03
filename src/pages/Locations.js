import React, { useState, useEffect } from "react";
import LocationChart from "../components/LocationChart/LocationChart";
import ChampionCard from "../components/ChampionCard/ChampionCard";
import { championList } from "../data/championsList";
import locations from "../data/locations.json";

const Locations = () => {
  const [champion, setChampion] = useState("global");
  const [data, setData] = useState(locations[champion]);

  useEffect(() => {
    setData(locations[champion]);
  }, [champion]);

  return (
    <div className="locations">
      <h1>{champion}</h1>
      <LocationChart data={data} />
      <div className="championsContainer">
        {championList.map((championName) => (
          <ChampionCard
            championName={championName}
            clickEvent={() => setChampion(championName)}
          />
        ))}
      </div>
    </div>
  );
};

export default Locations;
