import { Component, OnInit } from '@angular/core';
import { CalculatorUtil } from '../calc-utils';

@Component({
  selector: 'app-rd-calc',
  templateUrl: './rd-calc.component.html',
  styleUrls: ['./rd-calc.component.scss']
})
export class RDCalcComponent implements OnInit {

  model: any = { p: 500, r: 7.5, n: 4, t: 12 };
  amount: number;
  // Pie
  public pieChartLabels: string[] = ['Principal', 'Interest'];
  public pieChartData: number[] = [300, 500];
  public pieChartType = 'pie';

  constructor() { }

  ngOnInit() {
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
  }
}
