import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Card, Col } from "react-bootstrap";

function PerformanceDonut() {
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Top Performance Domain",
      align: "left",
    },
    credits: {
      enabled: false,
    },
    subtitle: {
      text: "A visual breakdown of domain performance across ad campaigns.",
      align: "left",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        innerSize: "60%", // Controls the donut size
        dataLabels: {
          enabled: false,
        },
        showInLegend: true, // Displays labels in legend
      },
    },
    // legend: {
    //     align: 'center',
    //     verticalAlign: 'bottom',
    //     layout: 'horizontal',
    // },
    series: [
      {
        name: "Domains",
        colorByPoint: true,
        data: [
          { name: "Domain Name 1", y: 12, color: "#5470c6" }, // Blue
          { name: "Domain Name 2", y: 11, color: "#91cc75" }, // Green
          { name: "Domain Name 3", y: 10, color: "#fac858" }, // Yellow
          { name: "Domain Name 4", y: 9, color: "#ee6666" }, // Red
          { name: "Domain Name 5", y: 8, color: "#73c0de" }, // Light Blue
          { name: "Domain Name 6", y: 7, color: "#3ba272" }, // Dark Green
          { name: "Domain Name 7", y: 6, color: "#fc8452" }, // Orange
          { name: "Domain Name 8", y: 5, color: "#9a60b4" }, // Purple
          { name: "Domain Name 9", y: 4, color: "#ea7ccc" }, // Pink
        ],
      },
    ],
  };

  return (
    <Card className="">
      <Card.Body className="">
        <figure className="highcharts-figure">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </figure>
      </Card.Body>
    </Card>
  );
}

export default PerformanceDonut;
