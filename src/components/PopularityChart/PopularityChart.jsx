import React from "react";
import { ResponsiveLine } from "nivo";

import styles from "./PopularityChart.module.css";

const PopularityChart = ({
  data,
  axisBottom = {
    tickRotation: 60,
  },
  axisLeft = {
    orient: "left",
  },
}) => {
  return (
    <div className={styles.container}>
      <ResponsiveLine
        data={data}
        margin={{ top: 10, right: 50, bottom: 50, left: 50 }}
        axisLeft={axisLeft}
        axisBottom={axisBottom}
      />
    </div>
  );
};

export default PopularityChart;
