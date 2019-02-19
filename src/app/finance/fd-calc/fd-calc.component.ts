import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { CalculatorUtil } from '../calc-utils';

@Component({
  selector: 'app-fd-loan-calc',
  templateUrl: './fd-calc.component.html',
  styleUrls: ['./fd-calc.component.scss']
})
export class FDCalcComponent implements OnInit {

  model: any = { p: 50000, r: 7.5, n: 4, t: 12 };
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

    this.amount = Math.round(CalculatorUtil.computeFD(p, r, n, t));
    this.pieChartData = [p, this.amount - p];
  }

}
