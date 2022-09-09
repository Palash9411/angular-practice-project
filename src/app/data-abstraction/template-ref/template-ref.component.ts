import { AfterViewInit, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.css']
})
export class TemplateRefComponent implements OnInit ,AfterViewInit{

  constructor(private cd :ChangeDetectorRef) { }

  @ViewChild('template') template : TemplateRef<any>|undefined;
  @ViewChild('container' , {read:ViewContainerRef}) container : ViewContainerRef|undefined;


  ngOnInit(): void {
  }

  ngAfterViewInit():void{
     if(this.template && this.container){
      this.container.insert(this.template.createEmbeddedView({heading:'Comments'}));
      this.cd.detectChanges();
     }
  }




}
