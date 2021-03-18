import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenulistComponent } from './menulist.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SciedFooterModule } from '../scied-footer/scied-footer.module';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    SciedFooterModule,
    MatIconModule
  ],
  declarations: [MenulistComponent],
  exports: [MenulistComponent]
})
export class MenulistModule { }
