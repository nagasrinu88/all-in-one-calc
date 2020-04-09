import { NgModule } from '@angular/core';
import { GamesRoutingModule } from './games-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { AppFooterModule, AppHeaderModule } from '@coreui/angular';

import { ThambolaComponent } from './thambola/thambola.component';
import { GamesLayoutComponent } from '../containers/games-layout/games-layout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GamesRoutingModule,
    AppFooterModule,
    AppHeaderModule,
    ChartsModule,

  ],
  declarations: [GamesLayoutComponent, ThambolaComponent]
})
export class GamesModule {
}
