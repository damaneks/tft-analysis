import React from "react";
import { ResponsiveHeatMap } from "nivo";

import styles from "./LocationChart.module.css";

const LocationChart = ({ data, ifAnimate = true }) => {
  return (
    <div className={styles.container}>
      <ResponsiveHeatMap
        data={data}
        theme={{ fontSize: 5 }}
        keys={[
          "column1",
          "column2",
          "column3",
          "column4",
          "column5",
          "column6",
          "column7",
        ]}
        indexBy="row"
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        forceSquare={true}
        padding={5}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        cellOpacity={1}
        cellBorderColor="black"
        labelTextColor="black"
        defs={[
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(0, 0, 0, 0.1)",
            rotation: -45,
            lineWidth: 4,
            spacing: 7,
          },
        ]}
        fill={[{ id: "lines" }]}
        animate={ifAnimate}
        motionConfig="wobbly"
        motionStiffness={80}
        motionDamping={9}
        isInteractive={false}
        hoverTarget="cell"
        cellHoverOthersOpacity={0.25}
      />
    </div>
  );
};
export default LocationChart;
