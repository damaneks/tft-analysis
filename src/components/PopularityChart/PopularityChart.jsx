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
        theme={{
          background: "#eeeeee",
          fontSize: 24,
          axis: {
            fontSize: 24,
            legend: {
              text: {
                fontSize: 24,
              },
            },
          },
          labels: {
            fontSize: 24,
          },
        }}
        margin={{ top: 10, right: 50, bottom: 50, left: 50 }}
        axisLeft={axisLeft}
        axisBottom={axisBottom}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: -28,
            translateY: 60,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 9,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default PopularityChart;
