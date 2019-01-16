import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartImageComponent } from './chart-image.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChartImageComponent],
  exports: [
    ChartImageComponent
  ]
})
export class ChartImageModule { }
