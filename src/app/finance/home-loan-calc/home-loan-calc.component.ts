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

  model: HomeLoanModel = new HomeLoanModel();

  loan: any = {
    downPayment: 500000, amount: 2000000, tenure: 120, roi: 9.6,
    emi: 0, interest: 0
  };
  property: any = { cost: 2500000, registration: 100000 };
  rent: any = { paid: 123600, avgIncrement: 5 };
  emi: number;

  paymentCycle = [];

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
          label: 'Tax Saved',
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

    this.model.setchartData(this.chart.data);
  }


  onSubmit() {
    //doing the pre computation
    this.model.loan.downPayment = this.property.cost + this.property.registration - this.model.loan.amount;
    this.model.compute();
    this.chart.update();
  }

}


class HomeLoanModel {

  MAX_TAX_SAVING_ALLOWED = 200000;
  TAX_SLAB = 0.3;

  chartData: any;
  loan: any = {
    downPayment: 500000, amount: 2000000, tenure: 120, roi: 9.6,
    emi: 0, interest: 0
  };
  paymentCycle: any = [];
  groupByFY = [];

  setchartData(chartData: any) {
    this.chartData = chartData;
  }


  compute() {
    this.paymentCycle = [];
    this.loan.emi = Math.round(CalculatorUtil.computeEMI(this.loan.amount,
      this.loan.roi / 100, this.loan.tenure));
    this.loan.interest = this.loan.emi * this.loan.tenure - this.loan.amount;

    let balance = this.loan.amount;
    const date = new Date();
    date.setDate(1);
    this.groupByFY = [];

    this.chartData.labels = [];
    this.chartData.datasets[0].data = [];
    this.chartData.datasets[1].data = [];
    this.chartData.datasets[2].data = [];
    let fyEntries: any;
    for (let i = 1; i <= this.loan.tenure; i++) {
      const cDate = new Date(date.setMonth(date.getMonth() + 1));
      const inte = Math.round(CalculatorUtil.computeInterestForMonth(this.loan.amount,
        this.loan.roi, this.loan.tenure, i, this.loan.emi));
      balance -= (this.loan.emi - inte);
      const entry = {
        date: cDate,
        no: i,
        principal: this.loan.emi - inte,
        interest: inte,
        rent: 10300 * (1 + i * 0.00417)
      };
      this.paymentCycle.push(entry);
      if (this.groupByFY.length == 0 || cDate.getMonth() == 3) {
        fyEntries = {
          label: 'FY ' + cDate.getFullYear() + '-' + (cDate.getFullYear() + 1),
          no: this.groupByFY.length + 1,
          principal: 0,
          interest: 0,
          rent: 0,
          taxSaved: 0,
          entries: []
        };
        this.groupByFY.push(fyEntries);
      }
      fyEntries.entries.push(entry);
      fyEntries.principal += entry.principal;
      fyEntries.interest += entry.interest;
      fyEntries.rent += Math.round(entry.rent);

      this.chartData.labels.push(i);
      this.chartData.datasets[0].data.push(this.loan.emi - inte);
      this.chartData.datasets[1].data.push(inte);
      this.chartData.datasets[2].data.push(10300 * (1 + i * 0.00417));
    }


    this.doPostCalculations();
  }
  private doPostCalculations() {
    this.chartData.labels = [];
    this.chartData.datasets[0].data = [];
    this.chartData.datasets[1].data = [];
    this.chartData.datasets[2].data = [];

    this.groupByFY.forEach(e => {
      this.chartData.labels.push(e.no);
      this.chartData.datasets[0].data.push(e.principal);
      this.chartData.datasets[1].data.push(e.interest);
      e.taxSaved = Math.round(Math.min(this.MAX_TAX_SAVING_ALLOWED, e.interest) * this.TAX_SLAB);
      this.chartData.datasets[2].data.push(e.taxSaved);
    });
  }
}