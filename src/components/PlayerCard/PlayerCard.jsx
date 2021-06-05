import React from "react";

import styles from "./PlayerCard.module.css";
import { playersListDescription } from "../../data/playersList";

const PlayerCard = ({ playerName }) => {
  return (
    <div className={styles.bigContainer}>
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
              Attack range:
            </h2>
            <p className={`${styles.animateText} ${styles.tailP}`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
              dolorem ipsum quos exercitationem nobis esse modi sunt dolorum ea
              earum, ab quaerat iste reprehenderit excepturi et corrupti eum
              autem neque!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
