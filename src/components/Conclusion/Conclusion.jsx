import React from "react";
import SpecificLocationChart from "../SpecificLocationChart/SpecificLocationChart";
import SpecificPopularityChart from "../SpecificPopularityChart/SpecificPopularityChart";

import styles from "./Conclusion.module.css";

const Conclusion = (props) => {
  const champions = props.champions;
  const width = props.width ? props.width : "30%";
  const height = props.height ? props.height : "250px";
  const players = props.players
    ? props.players.length === 1
      ? Array(champions.length).fill(props.players[0])
      : props.players
    : null;
  return (
    <div className={styles.container}>
      {props.chartType !== "popularity"
        ? champions.map((champion) => (
            <div className={styles.box}>
              <SpecificLocationChart champion={champion} />
            </div>
          ))
        : champions.map((champion, index) => (
            <div
              className={styles.box}
              style={{ width: width, height: height }}
            >
              <SpecificPopularityChart
                champions={champion}
                compareType={props.compareType}
                players={players[index]}
                title={props.titles[index]}
                start={props.start}
                end={props.end}
              />
            </div>
          ))}

      <div className={styles.textBox}>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default Conclusion;
