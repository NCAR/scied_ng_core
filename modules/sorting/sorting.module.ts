import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SciedModalModule } from '../scied-modal/scied-modal.module';
import { MatButtonModule } from '@angular/material/button';
import { SortingGameComponent } from './sorting-game/sorting-game.component';
import { SortingGameService } from './sorting-game.service';

@NgModule({
  imports: [
    CommonModule,
    SciedModalModule,
    MatButtonModule
  ],
  declarations: [SortingGameComponent],
  exports: [SortingGameComponent],
  providers: [SortingGameService]
})
export class SortingModule { }
