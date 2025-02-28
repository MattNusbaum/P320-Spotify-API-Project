import './App.css';
import React, {useState, useEffect} from 'react';
import ReactApexChart from 'react-apexcharts';

// Library used: https://github.com/apexcharts/react-apexcharts
  // npm install react-apexcharts apexcharts
// Code adapted from here: https://apexcharts.com/react-chart-demos/radar-charts/basic/

class RadarDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          series: [{
            name: 'Song Analysis',
            data: [props.ac, props.da, props.en, props.li, props.sp, props.va],
          }],
          options: {
            chart: {
              height: 350,
              type: 'radar',
            },
            title: {
              text: 'Title Track'
            },
            xaxis: {
              categories: ['Acousticness', 'Danceability', 'Energy', 'Liveness', 'Speechiness', 'Valence']
            }
          },
        };
      }
      render() {
        return (
          <div style={{ display:'flex', justifyContent: 'flex-end', position: 'absolute', top: '70px', right: '150px'}}>
            <div id="chart">
              <ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={350} />
            </div>
            <div id="html-dist"></div>
          </div>
        );
      }
    }
//const domContainer = document.querySelector('#app');
//ReactDOM.render(React.createElement(ApexChart), domContainer);
export default RadarDisplay;