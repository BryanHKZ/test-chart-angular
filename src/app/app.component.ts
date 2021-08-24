import { Component, ViewChild } from "@angular/core";

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [85],
      chart: {
        height: 500,
        type: "radialBar"
      },

      plotOptions: {
        radialBar: {
          offsetX: 0,
          offsetY: 0,
          startAngle: -90,
          endAngle: 90,
          track: {
            strokeWidth: "200%",
            background: "#ddd"
          },

          hollow: {
            size: "80%"
          },
          dataLabels: {
            name: {
              show: true,
              color: "#eda973",
              fontSize: "25px",
              offsetY: -100
            },
            value: {
              formatter: function (value) {
                return value;
              },
              color: "#00D48C",
              fontSize: "45px",
              fontWeight: 600,
              offsetY: -50
            }
          }
        }
      },
      labels: ["Hola Mundo"]
    };
  }
}
