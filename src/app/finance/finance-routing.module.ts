import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { HomeLoanCalcComponent } from './home-loan-calc/home-loan-calc.component';
import { FDCalcComponent } from './fd-calc/fd-calc.component';
import { RDCalcComponent } from './rd-calc/rd-calc.component';
import { CalculatorLayoutComponent } from '../containers';
import { PpfCalcComponent } from './ppf-calc/ppf-calc.component';
import { HomeLoanPartPaymentCalcComponent } from './home-loan-part-payment-calc/home-loan-part-payment-calc.component';
import { GratuityComponent } from './gratuity/gratuity.component';
import { SalaryComponent } from './salary-calc/salary-calc.component';
import { StockCalcComponent } from './stock-calc/stock-calc.component';

const routes: Routes = [
  {
    path: '',
    component: CalculatorLayoutComponent,
    children: [
      { path: '', redirectTo: 'fd', pathMatch: 'full' },
      {
        path: 'home-loan',
        component: HomeLoanCalcComponent
      }, {
        path: 'fd',
        data: {
          title: 'Deposite Calculator'
        },
        component: FDCalcComponent
      }, {
        path: 'rd',
        data: {
          title: 'Recurring Deposite Calculator'
        },
        component: RDCalcComponent
      }, {
        path: 'ppf',
        data: {
          title: 'PPF Calculator'
        },
        component: PpfCalcComponent
      }, {
        path: 'home-loan-part-payment',
        data: {
          title: 'Home Loan Partpayment Calculator'
        },
        component: HomeLoanPartPaymentCalcComponent
      }, {
        path: 'gratuity',
        data: {
          title: 'Gratuity Calculator'
        },
        component: GratuityComponent
      }, {
        path: 'salary',
        data: {
          title: 'Salary Calculator'
        },
        component: SalaryComponent
      }, {
        path: 'stock',
        data: {
          title: 'Stock Brokarage Calculator'
        },
        component: StockCalcComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
