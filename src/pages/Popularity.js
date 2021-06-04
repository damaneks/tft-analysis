import PopularityChart from "../components/PopularityChart/PopularityChart";
import React, { useState, useEffect } from "react";

const Popularity = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/damaneks/tft_detector/main/detections/players/zbrojson.json"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log(data["aatrox"]);
        setData([
          data["ziggs"],
          data["garen"],
          data["karma"],
          data["mordekaiser"],
        ]);
      })
      .catch((error) => {
        console.error("Error fetching data");
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return "Error!";

  return (
    <div className="popularity">
      <h1>Popularity</h1>
      <PopularityChart data={data} />
    </div>
  );
};

export default Popularity;
