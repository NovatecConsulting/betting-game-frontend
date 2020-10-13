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
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, MatchdayComponent, NavigationComponent, TableComponent],
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
