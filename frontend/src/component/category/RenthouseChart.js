import React, { Fragment, useRef, useState, useEffect,Component } from "react";
import "./Category.css";
import Paper from '@mui/material/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  AreaSeries,
  Title,
  Legend,
  PieSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import { styled } from '@mui/material/styles';
import { scalePoint } from 'd3-scale';
import { Doughnut, Line } from "react-chartjs-2";











const data = [

    // { category: 'Total', area: 20 },
    { category: 'Renthouse', area: 4 },
    { category: 'Sublet', area: 6 },
    { category: 'Bechelor', area: 4 },
    { category: 'Comersial-area', area: 3 },
    { category: 'Guesthoouse', area: 2},
   
   


  { year: '2022', Rented: 5, Available: 20 },
  
  
];

const PREFIX = 'Demo';

const classes = {
  chart: `${PREFIX}-chart`,
};

const StyledChartRoot = styled(Chart.Root)(() => ({
  [`&.${classes.chart}`]: {
    paddingRight: '20px',
  },
}));

const ChartRoot = props => (
  <StyledChartRoot {...props} className={classes.chart} />
);
const LegendRoot = props => (
  <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
);
const LegendLabel = props => (
  <Legend.Label {...props} sx={{ pt: 1 }} />
);
const LegendItem = props => (
  <Legend.Item {...props} sx={{ flexDirection: 'column' }} />
);


class RenthouseChart extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }


  render() {
    const lineState = {
      labels: ["Initial", "total"],
      datasets: [
        {
          label: "TOTAL POST",
          backgroundColor: ["#42c8f5"],
          hoverBackgroundColor: ["tomato"],
          data: [0, 5]
        },
      ],
    };

    const { data: chartData } = this.state;
    return (
       <div className="rentchart">
       
       <div className="linechart">

       <div className="linec">
       <h4>Total Post of Renthouse</h4>
       <Line data={lineState} />
     </div>

     
      </div> 



      <div className="pichart">
      <Paper className="paper">
        <Chart
          data={chartData}
        >
          <PieSeries
            name="area"
            valueField="area"
            argumentField="category"
          />

          <Legend />


          <Title
            text="Area of Available Houses"
          />
          
          <Animation />
        </Chart>
      </Paper>
          
    </div> 
      </div> 
    );
  }
}

 export default RenthouseChart;



