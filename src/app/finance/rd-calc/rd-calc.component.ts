import { Component, OnInit } from '@angular/core';
import { CalculatorUtil } from '../calc-utils';
import * as ChartJS from 'chart.js';

@Component({
  selector: 'app-rd-calc',
  templateUrl: './rd-calc.component.html',
  styleUrls: ['./rd-calc.component.scss']
})
export class RDCalcComponent implements OnInit {

  model: any = { p: 500, r: 7.5, n: 4, t: 12 };
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
    this.amount = Math.round(CalculatorUtil.computeRD(p, r, n, t));
    const tp = p * t;
    this.pieChartData = [tp, this.amount - tp];

    let mnths = (12 / n)
    let rt = t / mnths;
    let cnt = 1;

    this.interestChart.data.labels = [];
    this.interestChart.data.datasets[0].data = [];
    while (rt > 0) {
      this.interestChart.data.labels.push(cnt);
      this.interestChart.data.datasets[0].data.push(Math.round(CalculatorUtil.computeRD(p, r, n, cnt * mnths) - p * (cnt * mnths)));
      cnt++;
      rt -= 1;
    }
    this.interestChart.update();
  }
}
