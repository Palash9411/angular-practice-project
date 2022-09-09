import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-job-add',
  templateUrl: './hero-job-add.component.html',
  styleUrls: ['./hero-job-add.component.css']
})
export class HeroJobAddComponent implements OnInit {

  constructor() { }
  @Input() data: any;
  ngOnInit(): void {
  }

}
