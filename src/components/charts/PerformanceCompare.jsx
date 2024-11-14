import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function PerformanceCompare() {
  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "Performance Comparison",
      align: "left",
      margin: 40,
    },
    subtitle: {
      text: "Analyzing key metrics across ad campaigns and system performance.",
      align: "left",
    },
    credits: {
      enabled: false,
    },

    xAxis: {
      // title: {
      //     text: 'X Axis Title'
      // },
      categories: ["2012", "2013", "2014", "2015", "2016", "2017", "2018"],
    },
    yAxis: {
      title: {
        text: null,
      },
    },
    series: [
      {
        name: "System1",
        data: [1, 3, 2, 4, 6, 5, 7],
      },
      {
        name: "ads.com",
        data: [2, 4, 3, 5, 7, 6, 8],
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default PerformanceCompare;
