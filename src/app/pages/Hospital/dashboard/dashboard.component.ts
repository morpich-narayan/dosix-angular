import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpModule } from 'ngx-countup';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CountUpModule, NgApexchartsModule,NgbDropdownModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  basicBarChart!: any;
  heatmapChart!: any;

  constructor() {
    this._basicBarChart(["--tb-warning"])
    this._heatMap(["--tb-secondary", "--tb-card-bg-custom"])
  }

  private _basicBarChart(colors: any) {
    this.basicBarChart = {
      chart: {
        height: 260,
        type: 'bar',
        toolbar: {
          show: false,
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      series: [{
        name: 'Total Patients',
        data: [46, 16, 42, 10, 32, 27, 36, 44, 30, 16, 47, 11, 18]
      }],
      colors: this.getChartColorsArray(colors),
      grid: {
        show: false,
        padding: {
          top: -20,
          right: 0,
          bottom: -15,
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      }
    };
  }

  private _heatMap(colors: any) {
    const chartHeatMapBasicColors = this.getChartColorsArray(colors);
    this.heatmapChart = {
      series: [
        {
            name: 'SUN',
            data: this.generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'SAT',
            data: this.generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'FRI',
            data: this.generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'THU',
            data: this.generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'WED',
            data: this.generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'TUE',
            data: this.generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'MON',
            data: this.generateData(18, {
                min: 0,
                max: 90
            })
        }
        ],
        chart: {
            height: 380,
            type: 'heatmap',
            toolbar: {
                show: false
            },
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                bottom: 0,
            },
        },
        dataLabels: {
            enabled: false
        },
        colors: [chartHeatMapBasicColors[0]],
        stroke: {
            width: 10,
            colors: [chartHeatMapBasicColors[1]]
        }
    };
  }

  generateData(count:any, yrange:any) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
            x: x,
            y: y
        });
        i++;
    }
    return series;
}

  private getChartColorsArray(colors: any) {
    return colors.map(function (value: any) {
      var newValue = value.replace(" ", "");
      if (newValue.indexOf(",") === -1) {
        var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
        if (color) {
          color = color.replace(" ", "");
          return color;
        }
        else return newValue;;
      } else {
        var val = value.split(',');
        if (val.length == 2) {
          var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
          rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
          return rgbaColor;
        } else {
          return newValue;
        }
      }
    });
  }
}
