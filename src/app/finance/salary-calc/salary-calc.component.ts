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
  taxSlab: any = {};
  totalTax;
  deductions: any = { _80c: 0, houseLoan: 0, others: 0 };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    let gross = this.ctc - this.variablePay;
    this.grossPerMonth = Math.round(gross / 12);
    this.taxableSalary = gross
      - (250000 + this.deductions._80c + this.deductions.houseLoan + this.deductions.others);
    this.totalTax = this.computeTax(this.taxableSalary);
    this.netPerMonth = Math.round((gross - this.totalTax) / 12);
    this.computeTax(this.taxableSalary);
  }

  computeTax(val: number) {
    let tax = 0;
    this.taxSlab[0] = this.taxSlab[0] = this.taxSlab[2] = this.taxSlab[3] = 0;
    //val -= 250000;
    if (val > 0) {
      tax += 0.05 * Math.min(250000, val);
      this.taxSlab[1] = { val: Math.min(250000, val), tax: 0.05 * Math.min(250000, val) };
      val -= 250000;
    }
    if (val > 0) {
      tax += 0.2 * Math.min(500000, val);
      this.taxSlab[2] = { val: Math.min(500000, val), tax: 0.2 * Math.min(500000, val) };
      val -= 500000;
    }
    if (val > 0) {
      tax += 0.3 * val;
      this.taxSlab[3] = { val: val, tax: 0.3 * val };
    }
    return tax;
  }

}
