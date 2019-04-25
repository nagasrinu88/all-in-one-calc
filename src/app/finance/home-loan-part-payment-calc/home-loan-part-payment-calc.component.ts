import { Component, OnInit } from '@angular/core';
import { CalculatorUtil } from '../calc-utils';
import * as ChartJS from 'chart.js';

@Component({
  selector: 'app-home-loan-part-payment-calc',
  templateUrl: './home-loan-part-payment-calc.component.html',
  styleUrls: ['./home-loan-part-payment-calc.component.scss']
})
export class HomeLoanPartPaymentCalcComponent implements OnInit {

  model: any = {
    principal: 1929670.81,
    roi: 9.3,
    tenure: 86,
    partPayment: 100000,
    emi: 0,
    rdROI: 6
  };
  partPayments = [];
  chart: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const canvas: any = document.getElementById('myChart');
    const ctx = canvas.getContext('2d');
    this.chart = new ChartJS(ctx, {
      type: 'line',
      data: {
        labels: ["New", "In Progress", "On Hold"],
        datasets: [{
          label: 'Pary Payment',
          data: [1, 2, 3],
          borderColor: 'red',
          borderWidth: 1
        }, {
          label: 'Interest Saved',
          data: [1, 2, 3],
          borderColor: 'green',
          borderWidth: 1
        }, {
          label: 'RD Benifit',
          data: [1, 2, 3],
          borderColor: 'blue',
          borderWidth: 1
        }, {
          label: 'FD Benifit',
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

    this.model.emi = CalculatorUtil.computeEMI(this.model.principal, this.model.roi / 100, this.model.tenure);

    this.partPayments = [];
    const chartData = this.chart.data;

    for (let i = 0; i < 20; i++) {
      const payment = 100000 + 25000 * i;
      const compute = this.computeNewPayment(payment);
      chartData.labels[i] = i;
      chartData.datasets[0].data[i] = payment;
      chartData.datasets[1].data[i] = payment + compute.interestSaved;
      chartData.datasets[2].data[i] = compute.rdBenefit;
      chartData.datasets[3].data[i] = compute.fdBenefit;
      this.partPayments.push(compute);
    }
    this.chart.update();
    console.log(this.partPayments);
  }

  computeNewPayment(partPayment: number) {
    const obj: any = {
      principal: this.model.principal - partPayment,
      roi: this.model.roi,
      emi: this.model.emi,
      partPayment: partPayment
    };
    obj.tenure = CalculatorUtil.computeTenure(obj.principal, obj.roi / 100, this.model.emi);
    obj.tenureSaved = this.model.tenure - obj.tenure;
    obj.interestSaved = Math.round(obj.tenureSaved * obj.emi - partPayment);
    obj.benefit = (100 * obj.interestSaved / partPayment);
    obj.rdBenefit = Math.round(CalculatorUtil.computeRD(this.model.emi, this.model.rdROI / 100, 4, Math.round(obj.tenureSaved)));
    obj.fdBenefit = Math.round(CalculatorUtil.computeFD(partPayment, this.model.rdROI / 100, 4, Math.round(this.model.tenure)));
    return obj;
  }

}
