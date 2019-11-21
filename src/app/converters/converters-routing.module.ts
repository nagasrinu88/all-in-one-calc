import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { ConvertersLayoutComponent } from '../containers/converters-layout/converters-layout.component';
import { DeLimiterComponent } from './de-limiter/de-limiter.component';

const routes: Routes = [
  {
    path: '',
    component: ConvertersLayoutComponent,
    children: [
      { path: '', redirectTo: 'delim', pathMatch: 'full' },
      {
        path: 'delim',
        component: DeLimiterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvertersRoutingModule { }
