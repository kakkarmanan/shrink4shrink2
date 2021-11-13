import React, { useState, useEffect } from "react";
import { Chart } from "react-charts";

export default function Charts({ propsData }) {
  const [graphData, setGraphData] = useState([]);
  useEffect(() => {
    console.log(propsData);
    propsData.forEach((ele) => {
      setGraphData((prevData) => {
        const date = new Date(ele.date);
        return [...prevData, [date, ele.progress_rating]];
      });
    });
    graphData.sort((a, b) => a[0] < b[0]);
    console.log(graphData);
  }, [propsData]);
  const data = React.useMemo(
    () => [
      {
        label: "Progress",
        data: graphData,
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: "35vw",
        height: "35vh",
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  );
}
