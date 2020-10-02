import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MatchdayComponent } from './components/matchday/matchday.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'matchday', component: MatchdayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
