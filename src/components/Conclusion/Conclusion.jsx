import React from "react";
import SpecificLocationChart from "../SpecificLocationChart/SpecificLocationChart";

import styles from "./Conclusion.module.css";

const Conclusion = (props) => {
  const champions = props.champions;
  return (
    <div className={styles.container}>
      {champions.map((champion) => (
        <div className={styles.box}>
          <SpecificLocationChart champion={champion} />
        </div>
      ))}
      <div className={styles.textBox}>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default Conclusion;
