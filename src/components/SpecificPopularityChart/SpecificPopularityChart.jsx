import React from "react";
import PopularityChart from "../PopularityChart/PopularityChart";

import styles from "./SpecificPopularityChart.module.css";

const SpecificPopularityChart = ({
  champions,
  compareType,
  players,
  title,
  start = "2-1",
  end = "7-6",
  regions = ["Europe", "America", "Asia"],
}) => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    if (champions.length !== null && players.length !== 0) {
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
                  const champDict = { id: champ, data: [] };
                  for (const elem of gatheredData[champ]["data"]) {
                    if (elem["x"] >= start && elem["x"] <= end) {
                      champDict["data"].push(elem);
                    }
                  }
                  array.push(champDict);
                }
              } else {
                var champIndex = 0;
                for (const champ of champions) {
                  var elemIndex = 0;
                  for (const elem of gatheredData[champ]["data"]) {
                    if (elem["x"] >= start && elem["x"] <= end) {
                      array[champIndex]["data"][elemIndex]["y"] =
                        array[champIndex]["data"][elemIndex]["y"] + elem["y"];
                      elemIndex++;
                    }
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
            const array = [];
            if (compareType === "players") {
              for (const player of players) {
                const playerDict = { id: player, data: [] };
                for (const elem of data[player]["data"]) {
                  if (elem["x"] >= start && elem["x"] <= end) {
                    playerDict["data"].push(elem);
                  }
                }
                array.push(playerDict);
              }
            } else if (compareType === "regions") {
              for (const region of regions) {
                const regionDict = { id: region, data: [] };
                for (const elem of data[region]["data"]) {
                  if (elem["x"] >= start && elem["x"] <= end) {
                    regionDict["data"].push(elem);
                  }
                }
                array.push(regionDict);
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
        <PopularityChart data={data} axisLeft={null} fontSize={50} />
      ) : (
        <h1 style={{ color: "#393e46", fontSize: "2vmax" }}>Loading...</h1>
      )}
    </div>
  );
};

export default SpecificPopularityChart;
