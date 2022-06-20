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




const data = [

    // { category: 'Total', area: 20 },
    { category: 'Renthouse', area: 4 },
    { category: 'Sublet', area: 6 },
    { category: 'Bechelor', area: 4 },
    { category: 'Comersial-area', area: 3 },
    { category: 'Guesthoouse', area: 2},
   
   


  { year: '2019', Rented: 67225, Available: 46598 },
  { year: '2020', Rented: 179873, Available: 90560 },
  { year: '2021', Rented: 310088,  Available: 118848 }, 
  { year: '2022', Rented: 539318, Available: 189924 },
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


class Renthouse extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }



  

  render() {
    

    const { data: chartData } = this.state;
    return (
       <div className="rentchart">
       
       <div className="linechart">
      <Paper className="paper1">
        <Chart
          data={chartData}
          rootComponent={ChartRoot}
        >
          <ArgumentScale factory={scalePoint} />
          <ArgumentAxis />
          <ValueAxis />

          <AreaSeries
            name="Rented"
            valueField="Rented"
            argumentField="year"
          />
          <AreaSeries
            name="Available"
            valueField="Available"
            argumentField="year"
          />
          <Animation />
          <Legend
            position="bottom"
            rootComponent={LegendRoot}
            itemComponent={LegendItem}
            labelComponent={LegendLabel}
          />
          <Title
            text="Total Rented and Available Houses"
          />
        </Chart>
      </Paper>
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

 export default Renthouse;



