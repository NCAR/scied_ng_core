import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenulistComponent } from './menulist.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SciedFooterModule } from '../scied-footer/scied-footer.module';


@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    SciedFooterModule
  ],
  declarations: [MenulistComponent],
  exports: [MenulistComponent]
})
export class MenulistModule { }
