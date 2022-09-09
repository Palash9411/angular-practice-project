import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateRefComponent } from './template-ref/template-ref.component';



@NgModule({
  declarations: [
    TemplateRefComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[TemplateRefComponent]
})
export class DataAbstractionModule { }
