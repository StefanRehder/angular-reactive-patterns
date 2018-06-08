import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserEventExperimentsComponent } from './browser-event-experiments/browser-event-experiments.component';
import { EventBusExperimentsComponent } from './event-bus-experiments/event-bus-experiments.component';
import { HeroCounterComponent } from './hero-counter/hero-counter.component';
import { HeroListComponent } from './hero-list/hero-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowserEventExperimentsComponent,
    EventBusExperimentsComponent,
    HeroCounterComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
