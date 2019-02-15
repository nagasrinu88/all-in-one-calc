import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-fd-loan-calc',
  templateUrl: './fd-calc.component.html',
  styleUrls: ['./fd-calc.component.scss']
})
export class FDCalcComponent implements OnInit {

  model: any = { p: 500000, r: 7.5, n: 4, t: 5 };
  amount: number;
  // Pie
  public pieChartLabels: string[] = ['Principal', 'Interest'];
  public pieChartData: number[] = [300, 500];
  public pieChartType = 'pie';

  constructor() { }

  ngOnInit() {
  }


  onSubmit() {
    const p = this.model.p;
    const r = this.model.r / 100;
    const n = this.model.n;
    const t = this.model.t;

    this.amount = p * Math.pow(1 + r / n, n * t);
    this.pieChartData = [p, this.amount - p];
  }

}
