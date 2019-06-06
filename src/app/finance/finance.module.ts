import { NgModule } from "@angular/core";
import { FinanceRoutingModule } from './finance-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { HomeLoanCalcComponent } from './home-loan-calc/home-loan-calc.component';
import { FDCalcComponent } from './fd-calc/fd-calc.component';
import { AppFooterModule, AppHeaderModule } from '@coreui/angular';
import { RDCalcComponent } from './rd-calc/rd-calc.component';
import { CalculatorLayoutComponent } from '../containers';
import { PpfCalcComponent } from './ppf-calc/ppf-calc.component';
import { HomeLoanPartPaymentCalcComponent } from './home-loan-part-payment-calc/home-loan-part-payment-calc.component';
import { TaxCalcComponent } from './tax-calc/tax-calc.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FinanceRoutingModule,
    AppFooterModule,
    AppHeaderModule,
    ChartsModule,

  ],
  declarations: [CalculatorLayoutComponent, HomeLoanCalcComponent, FDCalcComponent, RDCalcComponent, PpfCalcComponent, HomeLoanPartPaymentCalcComponent, TaxCalcComponent]
})
export class FinanceModule {

}