import React from "react";

import PlayerCard from "../components/PlayerCard/PlayerCard";
import { fullPlayerList } from "../data/playersList";

const Players = () => {
  return (
    <div className="players">
      {fullPlayerList.map((player) => (
        <PlayerCard playerName={player} />
      ))}
    </div>
  );
};

export default Players;
