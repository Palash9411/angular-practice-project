import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataAbstractionModule } from './data-abstraction/data-abstraction.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataAbstractionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
