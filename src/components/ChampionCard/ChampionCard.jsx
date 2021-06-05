import React from "react";

import "./ChampionCard.css";
import { championsDescription } from "../../data/championsList";

const ChampionCard = ({ championName }) => {
  return (
    <div className="container">
      <div class="tile">
        <img
          src={`https://cdn.lolchess.gg/images/tft/5.0/portraits/${championName}.png`}
          alt={championName}
        />
        <div class="text">
          <h1>{championName}</h1>
          <h2 class="animate-text">
            Attack range: {championsDescription[championName].range}
          </h2>
          <p class="animate-text">{championsDescription[championName].skill}</p>
        </div>
      </div>
    </div>
  );
};

export default ChampionCard;
