import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Card } from "react-bootstrap";

function TotalRevenue() {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Total Revenue",
      align: "left",
      margin: 40,
    },
    subtitle: {
      text: "A comparative analysis of total revenue generated across platforms",
      align: "left",
    },
    credits: {
      enabled: false,
    },

    xAxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      crosshair: true,
      accessibility: {
        description: "Weeks",
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: false,
      },
    },
    tooltip: {
      valueSuffix: " (1000 MT)",
    },
    plotOptions: {
      column: {
        pointPadding: 0.1,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Organic",
        data: [14000, 18000, 6000, 15000, 14000, 18000, 22000],
        color: "#377CFE",
      },
      {
        name: "Paid",
        data: [12000, 15000, 22000, 6000, 12000, 12000, 12000],
        color: "#39CB7B",
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

export default TotalRevenue;
