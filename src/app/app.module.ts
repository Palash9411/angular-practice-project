import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataAbstractionModule } from './data-abstraction/data-abstraction.module';
import { AdDirective } from './dynamic-component-implementation/ad.directive';
import { AddBannerComponent } from './dynamic-component-implementation/add-banner/add-banner.component';

import { DynamicComponentModule } from './dynamic-component-implementation/dynamic-component.module';


@NgModule({
  declarations: [
    AdDirective,
    AppComponent,
    AddBannerComponent
  ],
  imports: [
    BrowserModule,
    DynamicComponentModule,
    DataAbstractionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
