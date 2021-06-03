import React from "react";
import { ResponsiveHeatMap } from "nivo";

import styles from "./LocationChart.module.css";

const LocationChart = ({ data }) => {
  return (
    <div className={styles.container}>
      <ResponsiveHeatMap
        data={data}
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
        margin={{ top: 60, right: 60, bottom: 60, left: 60 }}
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
        animate={true}
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
