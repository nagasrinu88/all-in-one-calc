import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'finance/fd',
    pathMatch: 'full',
  }, {
    path: 'finance',
    loadChildren: './finance/finance.module#FinanceModule'
  }, {
    path: 'converters',
    loadChildren: './converters/converters.module#ConvertersModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
