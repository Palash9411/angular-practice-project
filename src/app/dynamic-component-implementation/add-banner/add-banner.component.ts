import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AdComponent } from '../ad.component';
import { AdDirective } from '../ad.directive';
import { AdItem } from '../ad.item';
import { AdService } from '../ad.service';

@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.component.html',
  styleUrls: ['./add-banner.component.css']
})
export class AddBannerComponent implements OnInit {

  @Input() ads: AdItem[] = [];

  currentAdIndex = -1;
  constructor(private adService: AdService){} ;
  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;

  interval: number|undefined  ;

  ngOnInit(): void {
    this.ads = this.adService.getAds() ;
    this.loadComponent();
    this.getAds();
    console.log(this.ads)
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];
    console.log(this.ads)
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
debugger
    const componentRef = viewContainerRef.createComponent<AdComponent>(adItem.component);
    componentRef.instance.data = adItem.data;
  }

  getAds() {
    this.interval = window.setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

}
