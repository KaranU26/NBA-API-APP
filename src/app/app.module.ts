import { FormsModule } from '@angular/forms';
import { SavedComponent } from './saved/saved/saved.component';
import { PlayersComponent } from './players/players/players.component';
import { EasternComponent } from './eastern/eastern/eastern.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, EasternComponent, PlayersComponent, SavedComponent],
  entryComponents: [],
  imports: [BrowserModule, CommonModule, HttpClientModule, FormsModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
