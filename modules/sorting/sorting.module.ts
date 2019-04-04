import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SciedModalModule } from '../scied-modal/scied-modal.module';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SortingGameComponent } from './sorting-game/sorting-game.component';
import { SortingGameService } from './sorting-game.service';
import { MockSortingGameService } from './sorting-game.service.mock';

@NgModule({
  imports: [
    CommonModule,
    SciedModalModule,
    MatButtonModule,
    DragDropModule
  ],
  declarations: [SortingGameComponent],
  exports: [SortingGameComponent],
  providers: [SortingGameService, MockSortingGameService]
})
export class SortingModule { }
