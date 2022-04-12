import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LobbyComponent } from './lobby/lobby.component';
import { PromotionComponent } from './promotion/promotion.component';

const routes: Routes = [
  { path: '', redirectTo: '/promotions', pathMatch: 'full'},
  { path: 'promotions', component: LobbyComponent},
  { path: 'promotions/:title', component: PromotionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
