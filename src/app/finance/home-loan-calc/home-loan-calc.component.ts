import { Component, OnInit } from '@angular/core';
import { CalculatorUtil } from '../calc-utils';

@Component({
  selector: 'app-home-loan-calc',
  templateUrl: './home-loan-calc.component.html',
  styleUrls: ['./home-loan-calc.component.scss']
})
export class HomeLoanCalcComponent implements OnInit {

  loan: any = {
    downPayment: 500000, amount: 2000000, tenure: 120, roi: 9.6,
    emi: 0, interest: 0
  };
  property: any = { cost: 2500000, registration: 100000 };
  rent: any = { paid: 123600, avgIncrement: 5 };
  emi: number;

  paymentCycle = [];

  constructor() { }

  ngOnInit() {
    let p = CalculatorUtil.computeEMI(200000, 0.15, 24);
    let L = 200000;
    let r = .15;
    let n = 24;
    let balance = L * (Math.pow(1 + r, n) - Math.pow(1 + r, p)) / (Math.pow(1 + r, n) - 1);
    console.log(Math.pow(1 + r, p));
    console.log(balance);
  }

  onSubmit() {
    this.paymentCycle = [];
    this.loan.emi = Math.round(CalculatorUtil.computeEMI(this.loan.amount,
      this.loan.roi / 100, this.loan.tenure));
    this.loan.interest = this.loan.emi * this.loan.tenure - this.loan.amount;

    console.log(this.loan);
    for (let i = 1; i <= this.loan.tenure; i++) {
      const date = new Date();
      date.setDate(1);
      const inte = Math.round(CalculatorUtil.computeInterestForMonth(this.loan.principal,
        this.loan.roi, this.loan.tenure, i, this.loan.emi));
      this.paymentCycle.push({
        date: new Date(date.setMonth(date.getMonth() + i - 1)),
        no: i,
        principal: this.loan.emi - inte,
        interest: inte
      });
    }
    console.log(this.paymentCycle);
  }

}
