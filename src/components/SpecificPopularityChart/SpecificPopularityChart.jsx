import React from "react";
import PopularityChart from "../PopularityChart/PopularityChart";

import styles from "./SpecificPopularityChart.module.css";

const SpecificPopularityChart = ({
  champions,
  compareType,
  players,
  title,
  regions = ["Europe", "America", "Asia"],
}) => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    if (champions.length !== 0 && players.length !== 0) {
      if (compareType === "champions") {
        var filesToLoad = players.length;
        var array = [];
        for (const player of players) {
          fetch(
            "https://raw.githubusercontent.com/damaneks/tft_detector/main/detections/players/" +
              player.toLowerCase() +
              ".json"
          )
            .then((response) => {
              if (response.ok) {
                return response.json();
              }
              throw response;
            })
            .then((gatheredData) => {
              if (array.length === 0) {
                for (const champ of champions) {
                  array.push(gatheredData[champ]);
                }
              } else {
                var champIndex = 0;
                for (const champ of champions) {
                  var elemIndex = 0;
                  for (const elem of gatheredData[champ]["data"]) {
                    array[champIndex]["data"][elemIndex]["y"] =
                      array[champIndex]["data"][elemIndex]["y"] + elem["y"];
                    elemIndex++;
                  }
                  champIndex++;
                }
              }
            })
            .catch((error) => {
              console.error("Error fetching data" + error);
              setError(true);
            })
            // eslint-disable-next-line
            .finally(() => {
              filesToLoad = filesToLoad - 1;
              console.log(filesToLoad);
              if (filesToLoad === 0) {
                setData(array);
                setLoading(false);
              }
            });
        }
      } else {
        var champName = champions;
        if (champions[0].length > 1) {
          champName = champions[0];
        }
        fetch(
          "https://raw.githubusercontent.com/damaneks/tft_detector/main/detections/champions/" +
            champName +
            ".json"
        )
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw response;
          })
          .then((data) => {
            console.log(data);
            const array = [];
            if (compareType === "players") {
              for (const player of players) {
                array.push(data[player]);
              }
            } else if (compareType === "regions") {
              for (const region of regions) {
                array.push(data[region]);
              }
            }
            setData(array);
          })
          .catch((error) => {
            console.error("Error fetching data" + error);
            setError(true);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      {!loading && !error ? (
        <PopularityChart data={data} axisBottom={null} axisLeft={null} />
      ) : (
        <h1 style={{ color: "#393e46", fontSize: "2vmax" }}>Loading...</h1>
      )}
    </div>
  );
};

export default SpecificPopularityChart;
