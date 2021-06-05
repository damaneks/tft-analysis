import PopularityChart from "../components/PopularityChart/PopularityChart";
import PopularityChartControl from "../components/PopularityChartControl/PopularityChartControl";
import React, { useState, useEffect } from "react";

import { regionsList } from "../data/regionsList";
import { playersList, fullPlayerList } from "../data/playersList";
import { championList, championsListByCost } from "../data/championsList";

const Popularity = () => {
  const [data, setData] = useState([]);
  const [compareType, setCompareType] = useState("champions");
  const [regions, setRegions] = useState(regionsList);
  const [players, setPlayers] = useState(fullPlayerList);
  const [champions, setChampions] = useState(championList);
  const [championsCost, setChampionsCost] = useState([1, 2, 3, 4, 5]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
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
    // eslint-disable-next-line
  }, [compareType, champions, players]);

  useEffect(() => {
    if (compareType === "champions") {
      setChampions(championList);
    } else {
      setChampions(["aatrox"]);
    }
  }, [compareType]);

  useEffect(() => {
    var playersArray = [];
    for (const region of regions) {
      playersArray = playersArray.concat(playersList[region]);
    }
    setPlayers(playersArray);
  }, [regions]);

  useEffect(() => {
    var championsArray = [];
    for (const cost of championsCost) {
      championsArray = championsArray.concat(championsListByCost[cost]);
    }
    setChampions(championsArray);
  }, [championsCost]);

  if (error) return <h1>Error!"</h1>;

  return (
    <div className="popularity">
      <div className="chart-div">
        <div className="left-div">
          {!loading ? (
            <PopularityChart data={data} />
          ) : (
            <h1 style={{ color: "#393e46" }}>Loading...</h1>
          )}
        </div>
        <div className="right-div">
          <h1 style={{ fontSize: "2.75rem" }}>Popularity</h1>
          <PopularityChartControl
            compareType={compareType}
            compareTypeChangeEvent={(event) =>
              setCompareType(event.target.value)
            }
            regions={regions}
            regionsChangeEvent={(event) => setRegions(event.target.value)}
            players={players}
            playersChangeEvent={(event) => setPlayers(event.target.value)}
            champions={champions}
            championsChangeEvent={(event) => setChampions(event.target.value)}
            championsCost={championsCost}
            championsCostChangeEvent={(event) =>
              setChampionsCost(event.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Popularity;
