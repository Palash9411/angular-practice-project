import { Injectable } from '@angular/core';
import { AdItem } from './ad.item';
import { DynamicComponentModule } from './dynamic-component.module';
import { HeroJobAddComponent } from './hero-job-add/hero-job-add.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';

@Injectable({
  providedIn:DynamicComponentModule
})
export class AdService {

  constructor() { }

  getAds() {
    return [
      new AdItem(
        HeroProfileComponent,
        { name: 'Bombasto', bio: 'Brave as they come' }
      ),
      new AdItem(
        HeroProfileComponent,
        { name: 'Dr IQ', bio: 'Smart as they come' }
      ),
      new AdItem(
        HeroJobAddComponent,
        { headline: 'Hiring for several positions', body: 'Submit your resume today!' }
      ),
      new AdItem(
        HeroJobAddComponent,
        { headline: 'Openings in all departments', body: 'Apply today' }
      )
    ];
  }
}
