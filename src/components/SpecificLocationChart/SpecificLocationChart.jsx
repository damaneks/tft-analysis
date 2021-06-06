import React from "react";
import LocationChart from "../LocationChart/LocationChart";
import styles from "./SpecificLocationChart.module.css";

const SpecificLocationChart = ({ champion }) => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/damaneks/tft_detector/main/detections/locations.json"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data");
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{champion}</h3>
      {!loading && !error ? (
        <LocationChart data={data[champion]} ifAnimate={false} />
      ) : (
        <h1 style={{ color: "#393e46", fontSize: "2vmax" }}>Loading...</h1>
      )}
    </div>
  );
};

export default SpecificLocationChart;
