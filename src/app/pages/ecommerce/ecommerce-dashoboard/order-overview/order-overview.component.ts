import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-order-overview',
  standalone: true,
  imports: [NgxEchartsModule],
  templateUrl: './order-overview.component.html',
  styleUrl: './order-overview.component.scss'
})
export class OrderOverviewComponent {
  chartLineColors = this.getChartColorsArray(["--tb-primary", "--tb-danger", "--tb-border-color"])
  chartOptions!: EChartsOption;
  chartInstance: any;
  data: number[] = [];
  data2: number[] = [];
  categories: string[] = [];
  categories2: number[] = [];
  app: any = {};

  constructor() {}

  ngOnInit(): void {
    this.initializeChartData();
    this.initChartOptions();
  }

  ngOnDestroy(): void {
    if (this.chartInstance) {
      this.chartInstance.dispose();
    }     
  }

  initializeChartData() {
    let now = new Date();
    for (let i = 0; i < 10; i++) {
      this.categories.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
      now = new Date(+now - 2000);
    }

    for (let i = 0; i < 10; i++) {
      this.categories2.push(10 - i - 1);
      this.data.push(Math.round(Math.random() * 1000));
      this.data2.push(+(Math.random() * 10 + 5).toFixed(0));
    }
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

  initChartOptions() {
    this.chartOptions = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#283b56',
          },
        },
      },
      darkMode: true,
      grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        top: '10%',
        containLabel: true,
        borderColor: 'rgba(0, 0, 0, 0)',
      },
      toolbox: {
        show: false,
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {},
        },
      },
      color: this.chartLineColors,
      dataZoom: {
        show: false,
        start: 0,
        end: 100,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: true,
          data: this.categories,
        },
        {
          type: 'category',
          boundaryGap: true,
          data: this.categories2,
        },
      ],
      yAxis: [
        {
          type: 'value',
          scale: true,
          name: 'Price',
          max: 30,
          min: 0,
          boundaryGap: [0.2, 0.2],
          splitLine: {
            show: true,
            lineStyle: {
              color: this.chartLineColors[2],
            },
          },
        },
        {
          type: 'value',
          scale: true,
          name: 'Order',
          max: 1200,
          min: 0,
          boundaryGap: [0.2, 0.2],
          splitLine: {
            show: true,
            lineStyle: {
              color: this.chartLineColors[2],
            },
          },
        },
      ],
      series: [
        {
          name: 'Total Orders',
          type: 'bar',
          xAxisIndex: 1,
          yAxisIndex: 1,
          data: this.data,
        },
        {
          name: 'Return Orders',
          type: 'line',
          data: this.data2,
        },
      ],
    };
  }

  // Simulate data update every 2.1 seconds
  startDataUpdate() {
    setInterval(() => {
      let axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');
      this.data.shift();
      this.data.push(Math.round(Math.random() * 1000));
      this.data2.shift();
      this.data2.push(+(Math.random() * 10 + 5).toFixed(0));
      this.categories.shift();
      this.categories.push(axisData);
      this.categories2.shift();
      this.categories2.push(this.app.count++);
      if (this.chartInstance) {
        this.chartInstance.setOption({
          xAxis: [
            {
              data: this.categories,
            },
            {
              data: this.categories2,
            },
          ],
          series: [
            {
              data: this.data,
            },
            {
              data: this.data2,
            },
          ],
        });
      }
    }, 2100);
  }
}
