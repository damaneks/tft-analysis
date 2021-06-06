import React from "react";
import SpecificLocationChart from "../SpecificLocationChart/SpecificLocationChart";
import SpecificPopularityChart from "../SpecificPopularityChart/SpecificPopularityChart";

import styles from "./Conclusion.module.css";

const Conclusion = (props) => {
  const champions = props.champions;
  return (
    <div className={styles.container}>
      {props.chartType !== "popularity" ? (
        champions.map((champion) => (
          <div className={styles.box}>
            <SpecificLocationChart champion={champion} />
          </div>
        ))
      ) : (
        <div className={styles.box}>
          <SpecificPopularityChart
            champions={champions}
            compareType={props.compareType}
            players={props.players}
            title={props.title}
          />
        </div>
      )}

      <div className={styles.textBox}>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default Conclusion;
