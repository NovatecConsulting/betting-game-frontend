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
import { MatchdayState } from './state/matchday-state';
import { HttpClientModule } from '@angular/common/http';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [AppComponent, HomepageComponent, MatchdayComponent, NavigationComponent, TableComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    NgxsModule.forRoot([AppState, MatchdayState], {
      developmentMode: true
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    AuthModule.forRoot({
      domain: 'YOUR_DOMAIN',
      clientId: 'YOUR_CLIENT_ID'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
