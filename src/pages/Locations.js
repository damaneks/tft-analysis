import React, { useState, useEffect } from "react";
import LocationChart from "../components/LocationChart/LocationChart";
import ChampionCard from "../components/ChampionCard/ChampionCard";
import { championList } from "../data/championsList";

const Locations = () => {
  const [champion, setChampion] = useState("global");
  const [data, setData] = useState([]);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/damaneks/tft_detector/main/detections/locations.json"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setLocations(data["global"]);
      })
      .catch((error) => {
        console.error("Error fetching data");
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLocations(data[champion]);
  }, [champion]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return "Error!";

  return (
    <div className="locations">
      <h1>{champion}</h1>
      <LocationChart data={locations} />
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
