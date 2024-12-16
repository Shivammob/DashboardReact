import React from "react";
import Highcharts from "highcharts";
import SolidGauge from "highcharts/modules/solid-gauge";
import highchartsMore from "highcharts/highcharts-more.js";
import HighchartsReact from "highcharts-react-official";

highchartsMore(Highcharts);
SolidGauge(Highcharts);
function Revenue() {
  const options = {
    chart: {
      type: "solidgauge",
      height: "100%",
    },
    title: {
      text: "Month Target achieved",
      style: {
        fontSize: "12px",
        color: "#666666",
        fontWeight: "400"
      },
    },
    tooltip: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    accessibility: {
      enabled: false,
    },
    pane: {
      startAngle: -90,
      endAngle: 90,
      background: {
        outerRadius: "100%",
        innerRadius: "60%",
        shape: "arc",
      },
    },
    yAxis: {
      min: 0,
      max: 200,
      stops: [[0.5, "#d0df00"]], // Color at 50%
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      labels: {
        y: 16,
        style: {
          fontSize: "13px",
        },
      },
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: -20,
          borderWidth: 0,
          //   useHTML: true,
          //   format:
          //     '<div style="text-align:center"><span style="font-size:18px">{y}%</span></div>',
        },
      },
    },
    series: [
      {
        name: "Target",
        data: [92], // Current percentage value
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:18px">{y}%</span></div>',
        },
      },
    ],
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} id="round1"/>
  );
}

export default Revenue;
