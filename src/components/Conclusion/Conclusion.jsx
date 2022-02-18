import React from "react";
import SpecificLocationChart from "../SpecificLocationChart/SpecificLocationChart";
import SpecificPopularityChart from "../SpecificPopularityChart/SpecificPopularityChart";

import styles from "./Conclusion.module.css";

const Conclusion = (props) => {
  const champions = props.champions ? props.champions : "null";
  const width = props.width ? props.width : "30%";
  const height = props.height ? props.height : "250px";
  const players = props.players
    ? props.players.length === 1
      ? Array(champions.length).fill(props.players[0])
      : props.players
    : null;

  const start = props.start
    ? props.start.length === 1
      ? Array(champions.length).fill(props.start[0])
      : props.start
    : "2-1";

  const end = props.end
    ? props.end.length === 1
      ? Array(champions.length).fill(props.end[0])
      : props.end
    : "7-6";

  if (champions != "null") {
  return (
    <>
      <h1 className={styles.title}>{props.title}</h1>
      
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
                  start={start[index]}
                  end={end[index]}
                />
              </div>
            ))}
          

        <div className={styles.textBox}>
          <p>{props.children}</p>
        </div>
      </div>
    </>
  );
          } else {
            return (
    <>
      <h1 className={styles.title}>{props.title}</h1>
      
      <div className={styles.container}>
        <div className={styles.textBox}>
          <p>{props.children}</p>
        </div>
      </div>
    </>
  );
          }
};

export default Conclusion;
