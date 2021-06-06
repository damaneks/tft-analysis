import React from "react";

import styles from "./ChampionCard.module.css";

import { championsDescription } from "../../data/championsList";

const ChampionCard = ({ championName }) => {
  return (
    <div className={styles.container}>
      <div className={styles.tile}>
        <img
          src={`https://cdn.lolchess.gg/images/tft/5.0/portraits/${championName}.png`}
          alt={championName}
        />
        <div className={styles.text}>
          <h1>{championName}</h1>
          <h2 className={styles.animateText}>
            Attack range: {championsDescription[championName].range}
          </h2>
          <p className={styles.animateText}>
            {championsDescription[championName].skill}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChampionCard;
