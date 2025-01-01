import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpModule } from 'ngx-countup';
import { NGX_ECHARTS_CONFIG, NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { OrderOverviewComponent } from "./order-overview/order-overview.component";

@Component({
  selector: 'app-ecommerce-dashoboard',
  standalone: true,
  imports: [CountUpModule, NgbCarouselModule, CommonModule, NgxEchartsModule, NgApexchartsModule, OrderOverviewComponent],
  templateUrl: './ecommerce-dashoboard.component.html',
  styleUrl: './ecommerce-dashoboard.component.scss'
})
export class EcommerceDashoboardComponent {
  chartOptions: any;
  chartOptionsTwo: any;

  constructor() {
    this._basicBarChart(["--tb-danger", "--tb-success", "--tb-border-color"])
    this._basicBarTwoChart(["--tb-secondary", "--tb-primary", "--tb-light"])
  }

  private _basicBarChart(colors: any) {
    const color = this.getChartColorsArray(colors)
    this.chartOptions = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Purchase', 'Sales Earning'],
        textStyle: {
          color: '#9fa0a1'
        }
      },
      darkMode: 'auto',
      grid: {
        top: '15%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        show: false,
        feature: {
          saveAsImage: {}
        }
      },
      color: color,
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: true,
          lineStyle: {
            color: color[2]
          }
        }
      },
      series: [
        {
          name: 'Purchase',
          type: 'line',
          step: 'start',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Sales Earning',
          type: 'line',
          step: 'middle',
          data: [220, 282, 201, 234, 290, 430, 410]
        }
      ]
    };
  }

  private _basicBarTwoChart(colors: any) {
    const color = this.getChartColorsArray(colors)
    this.chartOptionsTwo = {
      series: [75],
      chart: {
        height: 335,
        type: 'radialBar',
        toolbar: {
          show: true
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: '70%',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
          },
          track: {
            background: color[2],
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              fontSize: '17px'
            },
            value: {
              formatter: function (val: string) {
                return parseInt(val);
              },
              fontSize: '36px',
              show: true,
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: [color[1]],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      colors: color,
      stroke: {
        lineCap: 'round'
      },
      labels: ['Cart'],
    };
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
