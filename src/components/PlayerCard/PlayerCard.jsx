import React from "react";

import styles from "./PlayerCard.module.css";
import { playersListDescription } from "../../data/playersList";

const PlayerCard = ({ playerName }) => {
  return (
    <div className={styles.bigContainer}>
      <a
        href={playersListDescription[playerName]["stream"]}
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.container}>
          <div className={styles.tail}>
            <img
              src={playersListDescription[playerName]["img"]}
              alt={playerName}
              className={styles.tailImg}
            />
            <div className={styles.text}>
              <h1 className={styles.tailH1}>{playerName}</h1>
              <h2 className={`${styles.animateText} ${styles.tailH2}`}>
                Region: {playersListDescription[playerName]["region"]}
              </h2>
              <p className={`${styles.tailP} ${styles.animateText}`}></p>
              <div className={`${styles.dataContainer} ${styles.animateText}`}>
                <div className={`${styles.dataColumn}`}>
                  <h3>{playersListDescription[playerName]["played"]}</h3>
                  Played
                </div>
                <div className={`${styles.dataColumn}`}>
                  <h3>{playersListDescription[playerName]["wins"]}</h3>
                  Wins
                </div>
                <div
                  className={`${styles.dataColumn} ${styles.dataLastColumn}`}
                >
                  <h3>{playersListDescription[playerName]["top4"]}</h3>
                  Top 4
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PlayerCard;
