import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeechUtterComponent } from './components/speech-utter/speech-utter.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiftsComponent } from './components/swifts/swifts.component';
import { WeatherApiComponent } from './components/weather-api/weather-api.component';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './sites/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeechUtterComponent,
    SwiftsComponent,
    WeatherApiComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
