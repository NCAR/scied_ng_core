import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SciedFooterComponent } from './scied-footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import{ MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: [SciedFooterComponent],
  exports: [SciedFooterComponent]
})
export class SciedFooterModule { }
