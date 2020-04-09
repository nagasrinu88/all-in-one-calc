import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GamesLayoutComponent } from '../containers/games-layout/games-layout.component';
import { ThambolaComponent } from './thambola/thambola.component';

const routes: Routes = [
  {
    path: '',
    component: GamesLayoutComponent,
    children: [
      { path: '', redirectTo: 'e-thambola', pathMatch: 'full' },
      {
        path: 'e-thambola',
        component: ThambolaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
