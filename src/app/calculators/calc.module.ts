import { NgModule } from "@angular/core";
import { CalculatorsRoutingModule } from './calc-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { HomeLoanCalcComponent } from './home-loan-calc/home-loan-calc.component';
import { FDCalcComponent } from './fd-calc/fd-calc.component';
import { AppFooterModule, AppHeaderModule } from '@coreui/angular';
import { RDCalcComponent } from './rd-calc/rd-calc.component';
import { CalculatorLayoutComponent } from '../containers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CalculatorsRoutingModule,
    AppFooterModule,
    AppHeaderModule,
    ChartsModule,

  ],
  declarations: [CalculatorLayoutComponent, HomeLoanCalcComponent, FDCalcComponent, RDCalcComponent]
})
export class CalculatorsModule {

}