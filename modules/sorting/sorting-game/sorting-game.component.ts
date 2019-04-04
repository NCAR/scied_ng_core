import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList, CdkDragEnter, CdkDragExit } from '@angular/cdk/drag-drop';
import { DataService } from '../../../services/data/data.service';
import { WebappService } from '../../../services/webapp/webapp.service';
import { SortingGameService } from '../sorting-game.service';


@Component({
  selector: 'scied-sorting-game',
  templateUrl: './sorting-game.component.html',
  styleUrls: ['./sorting-game.component.scss']
})
export class SortingGameComponent implements OnInit {
  @Input() data: any = null;
  @Input() baseUrl: any = null;
  @Input() level: any = null;


  constructor(private dataService: DataService, public webapp: WebappService, private sortingGameService: SortingGameService) { }

  ngOnInit() {}
  ngOnChanges() {
    if(this.data && this.level){
      this.sortingGameService.setupGame(this.data, this.level);
    }
  }
  changeLevel(tobeLevel){
    this.sortingGameService.resetGame();

      if(tobeLevel == this.level){
        //manually reset
        this.level = tobeLevel;
        this.sortingGameService.setupGame(this.data, this.level);
      } else {
        this.webapp.goToPage(this.baseUrl+'/'+tobeLevel);
      }
  }
  ngOnDestroy() {
    this.sortingGameService.resetGame();
  }

}
