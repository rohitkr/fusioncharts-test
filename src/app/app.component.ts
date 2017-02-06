import { Component } from '@angular/core';

import * as FusionCharts from 'fusioncharts';
import * as charts from 'fusioncharts/fusioncharts.charts';
charts(FusionCharts);


var chartData = {
  chart: {theme: 'fint'},
  data: [{value: 50}, {value: 55}, {value: 70}, {value: 60}]
}

var config = {
    type: "Column2D",
    width: 500,
    height: 300,
    dataFormat: 'json',
    dataSource: chartData
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
    chartData = JSON.stringify(chartData);

    chartConf = JSON.stringify(config);
}
