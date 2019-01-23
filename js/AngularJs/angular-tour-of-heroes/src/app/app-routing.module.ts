import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {path: 'angular-demo/heroes', component: HeroesComponent},
  {path: 'angular-demo/dashboard', component: DashboardComponent},
  {path: '', redirectTo: 'angular-demo/dashboard', pathMatch: 'full'},
  {path: 'angular-demo/detail/:id', component: HeroDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
