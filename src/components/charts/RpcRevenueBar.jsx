import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Card } from "react-bootstrap";

function RpcRevenueBar() {
    
  const options = {
    chart: {
        zoomType: 'xy',
    },
    title: {
        text: 'Clicks, RPC and Revenue',
        align: 'left',
        margin: 40,
        style: {
            fontWeight: 'bold',
            fontSize: '18px'
        }
    },
    credits: {
        enabled: false
    },
    subtitle: {
        text: 'Past 2 weeks',
        align: 'left',
        style: {
            fontSize: '12px',
            color: '#757575'
        }
    },
    xAxis: [{
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        crosshair: true,

    }],
    yAxis: [{ // Primary yAxis (left)
        labels: {
            format: '{value}',
            style: {
                color: "#757575"
            }
        },
        title: {
            text: null,
        }
    }, { // Secondary yAxis (right)
        title: {
            text: null,
        },
        labels: {
            format: '{value} K',
            style: {
                color: "#FFB41B"
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        itemStyle: {
            fontWeight: 'normal'
        }
    },
    series: [{
        name: 'Clicks',
        type: 'column',
        yAxis: 0,
        data: [400, 300, 700, 500, 600, 450, 700],
        tooltip: {
            valueSuffix: ''
        },
        color: '#377CFE'
    }, {
        name: 'RPC',
        type: 'column',
        yAxis: 0,
        data: [200, 150, 300, 250, 320, 240, 380],
        tooltip: {
            valueSuffix: ''
        },
        color: '#39CB7B'
    }, {
        name: 'Revenue',
        type: 'line',
        yAxis: 1,
        data: [1000, 900, 1500, 1100, 1600, 1300, 2000],
        tooltip: {
            valueSuffix: ' K'
        },
        color: '#FFB41B',
        marker: {
            enabled: true,
            symbol: 'circle',
            radius: 4
        }
    }]
  };
  return (
    <Card className="">
      <Card.Body className="">
        <figure className="highcharts-figure rpcrevenuechart mb-0">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </figure>
      </Card.Body>
    </Card>
  );
}

export default RpcRevenueBar;
