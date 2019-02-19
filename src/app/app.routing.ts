import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'calculators/fd',
    pathMatch: 'full',
  }, {
    path: 'calculators',
    loadChildren: './calculators/calc.module#CalculatorsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
