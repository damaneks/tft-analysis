import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import styles from "./ChampionCard.module.css";

const ChampionCard = ({ championName, clickEvent }) => {
  return (
    <div className={styles.container} onClick={clickEvent}>
      <Card className={styles.card}>
        <CardActionArea className={styles.cardActionArea}>
          <CardMedia
            component="img"
            alt={championName}
            image={`https://cdn.lolchess.gg/images/tft/5.0/portraits/${championName}.png`}
            className={styles.cardMedia}
          />
          <CardContent className={styles.cardContent}>
            {championName}
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ChampionCard;
