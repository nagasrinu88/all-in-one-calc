import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { DeLimiterComponent } from './de-limiter/de-limiter.component';
import { ConvertersRoutingModule } from './converters-routing.module';
import { ConvertersLayoutComponent } from '../containers/converters-layout/converters-layout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ConvertersRoutingModule,
    ChartsModule,

  ],
  declarations: [ConvertersLayoutComponent, DeLimiterComponent]
})
export class ConvertersModule {

}