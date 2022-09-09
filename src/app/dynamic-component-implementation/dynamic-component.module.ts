import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdDirective } from './ad.directive';

import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { HeroJobAddComponent } from './hero-job-add/hero-job-add.component';



@NgModule({
  declarations: [
    
    HeroProfileComponent,
    HeroJobAddComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[]
})
export class DynamicComponentModule { }
