import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { HomeLoanCalcComponent } from './home-loan-calc/home-loan-calc.component';
import { FDCalcComponent } from './fd-calc/fd-calc.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-loan',
    pathMatch: 'full',
  },
  {
    path: 'home-loan',
    component: HomeLoanCalcComponent
  },
  {
    path: 'fd',
    data: {
      title: 'Deposite Calculator'
    },
    component: FDCalcComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorsRoutingModule { }
