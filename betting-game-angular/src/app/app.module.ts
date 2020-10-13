import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MatchdayComponent } from './components/matchday/matchday.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AppState } from './state/app-state';
import { NgxsModule } from '@ngxs/store';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, HomepageComponent, MatchdayComponent, NavigationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
