import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsTreemap from 'highcharts/modules/treemap';

HighchartsTreemap(Highcharts);

function TeamReport() {
  const options = {
    series: [
      {
        type: "treemap",
        layoutAlgorithm: "squarified",
        data: [
          {
            name: "Raghav Dhuria's Team",
            value: 6,
            color: "#6baed6", // Blue
          },
          {
            name: "Harshana's Team",
            value: 4,
            color: "#f4cc70", // Yellow
          },
          {
            name: "Africa",
            value: 2,
            color: "#e8743b", // Orange
          },
          {
            name: "Eastern Medi...",
            value: 2,
            color: "#9564bf", // Purple
          },
          {
            name: "Europe",
            value: 2,
            color: "#8087E8", // Green
          },
          {
            name: "Americas",
            value: 2,
            color: "#6a9b6a", // Teal
          },
        ],
      },
    ],
    title: {
      text: null,
    },
    tooltip: {
      pointFormat: "<b>{point.name}</b>: {point.value}",
    },
    credits: {
      enabled: false,
    },
    accessibility: {
      enabled: false,
    },
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default TeamReport;
