import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { CalculatorUtil } from '../calc-utils';
import * as ChartJS from 'chart.js';

@Component({
  selector: 'app-fd-loan-calc',
  templateUrl: './fd-calc.component.html',
  styleUrls: ['./fd-calc.component.scss']
})
export class FDCalcComponent implements OnInit {

  model: any = { p: 50000, r: 7.5, n: 4, t: 12 };
  amount: number;
  interestChart: ChartJS;
  // Pie
  public pieChartLabels: string[] = ['Principal', 'Interest'];
  public pieChartData: number[] = [300, 500];
  public pieChartType = 'pie';

  constructor() { }

  ngOnInit() {
    const canvas: any = document.getElementById('line-chart');
    const ctx = canvas.getContext('2d');
    this.interestChart = new ChartJS(ctx, {
      type: 'line',
      data: {
        labels: ["Interest"],
        datasets: [{
          label: 'Interest Growth',
          data: [1, 2, 3],
          borderColor: 'red',
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        display: true
      }
    });

    this.onSubmit();
  }


  onSubmit() {
    const p = this.model.p;
    const r = this.model.r / 100;
    const n = this.model.n;
    const t = this.model.t;

    this.amount = Math.round(CalculatorUtil.computeFD(p, r, n, t));
    this.pieChartData = [p, this.amount - p];

    let mnths = (12 / n)
    let rt = t / mnths;
    let cnt = 1;

    this.interestChart.data.labels = [];
    this.interestChart.data.datasets[0].data = [];
    while (rt > 0) {
      this.interestChart.data.labels.push(cnt);
      this.interestChart.data.datasets[0].data.push(Math.round(CalculatorUtil.computeFD(p, r, n, cnt * mnths) - p));
      cnt++;
      rt -= 1;
    }
    this.interestChart.update();
  }

}
