import { Component, OnInit, ViewChild } from '@angular/core';
import { CalculatorUtil } from '../calc-utils';
import * as ChartJS from 'chart.js';

@Component({
  selector: 'app-home-loan-calc',
  templateUrl: './home-loan-calc.component.html',
  styleUrls: ['./home-loan-calc.component.scss']
})
export class HomeLoanCalcComponent implements OnInit {

  chart: ChartJS;

  loan: any = {
    downPayment: 500000, amount: 2000000, tenure: 120, roi: 9.6,
    emi: 0, interest: 0
  };
  property: any = { cost: 2500000, registration: 100000 };
  rent: any = { paid: 123600, avgIncrement: 5 };
  emi: number;

  paymentCycle = [];


  public chartLabels: any[] = [1, 2, 3, 4, 5];
  public chartType = 'line';

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    const canvas: any = document.getElementById('myChart');
    const ctx = canvas.getContext('2d');
    this.chart = new ChartJS(ctx, {
      type: 'line',
      data: {
        labels: ["New", "In Progress", "On Hold"],
        datasets: [{
          label: 'Principal',
          data: [1, 2, 3],
          borderColor: 'red',
          borderWidth: 1
        }, {
          label: 'Interest',
          data: [1, 2, 3],
          borderColor: 'green',
          borderWidth: 1
        }, {
          label: 'Rent Paying',
          data: [1, 2, 3],
          borderColor: 'blue',
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        display: true
      }
    });
  }


  onSubmit() {
    this.paymentCycle = [];
    this.chartLabels = [];

    this.loan.emi = Math.round(CalculatorUtil.computeEMI(this.loan.amount,
      this.loan.roi / 100, this.loan.tenure));
    this.loan.interest = this.loan.emi * this.loan.tenure - this.loan.amount;

    let balance = this.loan.amount;
    const date = new Date();
    const chartData = this.chart.data;
    chartData.labels = [];
    chartData.datasets[0].data = [];
    chartData.datasets[1].data = [];
    chartData.datasets[2].data = [];
    date.setDate(1);
    for (let i = 1; i <= this.loan.tenure; i++) {
      const inte = Math.round(CalculatorUtil.computeInterestForMonth(this.loan.amount,
        this.loan.roi, this.loan.tenure, i, this.loan.emi));
      balance -= (this.loan.emi - inte);
      this.paymentCycle.push({
        date: new Date(date.setMonth(date.getMonth() + 1)),
        no: i,
        principal: this.loan.emi - inte,
        interest: inte
      });

      chartData.labels.push(i);
      chartData.datasets[0].data.push(this.loan.emi - inte);
      chartData.datasets[1].data.push(inte);
      chartData.datasets[2].data.push(10300);
      //this.chartData.push(this.loan.emi - inte);
    }
    this.chart.update();
  }

}
