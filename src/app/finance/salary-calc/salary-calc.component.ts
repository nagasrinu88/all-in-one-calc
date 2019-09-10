import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary-calc',
  templateUrl: './salary-calc.component.html',
  styleUrls: ['./salary-calc.component.scss']
})
export class SalaryComponent implements OnInit {
  ctc = 1200000;
  variablePay = 100000;

  basicPay;
  hra;
  specialPay;

  grossPerMonth;
  netPerMonth;

  taxableSalary;
  totalTax;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    let gross = this.ctc - this.variablePay;
    this.grossPerMonth = Math.round(gross / 12);
    this.taxableSalary = gross;
    this.totalTax = this.computeTax(gross);
    this.netPerMonth = Math.round((gross - this.totalTax) / 12);
  }

  computeTax(val: number) {
    let tax = 0;
    val -= 250000;
    if (val > 0) {
      tax += 0.05 * Math.min(250000, val);
      val -= 250000;
    }
    if (val > 0) {
      tax += 0.2 * Math.min(500000, val);
      val -= 500000;
    }
    if (val > 0) {
      tax += 0.3 * val;
    }
    return tax;
  }

}
