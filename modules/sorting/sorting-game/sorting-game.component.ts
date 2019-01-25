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
  @Input() data: any;
  @Input() baseUrl: any;
  @Input() level: any;

  dropZones: string = "";
  modal = {
    title: "",
    body: ""
  };
  showModal: boolean = false;
  dropBins = [];
  bins = [];

  constructor(private dataService: DataService, public webapp: WebappService, private sortingGameService: SortingGameService) { }

  ngOnInit() { }
  ngOnChanges() {
    console.log(this.data);
    this.loadData();

  }
  loadData() {
    this.sortingGameService.setupGame(this.data, this.level);
    this.initDropZones();
    this.initDropBins();

  }
  initDropBins(){
    for (let i = 0; i < this.data.dropzones[this.level].length; i++) {
      let emptyBin = [];
      if (!this.dropBins[this.data.dropzones[this.level][i].id]) {
        this.dropBins[this.data.dropzones[this.level][i].id] = [];
      }

      if (this.bins.indexOf(this.data.dropzones[this.level][i].id) == -1) {
        this.bins.push(this.data.dropzones[this.level][i].id);
      }
    }
    console.log(this.bins);
  }
  initDropZones() {
    let dropList = [];
    for (let key in this.data.dropzones[this.level]) {
      if (this.data.dropzones[this.level].hasOwnProperty(key)) {
        dropList.push(this.data.dropzones[this.level][key].id);
      }
    }
    this.dropZones = dropList.toString();
  }
  drop(event: CdkDragDrop<string[]>) {
    let item_class = event.item.element.nativeElement.classList;
    let bin_id = event.container.element.nativeElement.id;

    if (!item_class.contains(bin_id)) {
      return;
    } else if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log('in');
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

    }


  }

  noReturnPredicate() {
    return false;
  }

  toggleCreditsModal() {
    this.modal.title = "Credits";
    this.modal.body = this.data.game.credits.text;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  ngOnDestroy() {
    this.sortingGameService.resetGame();
  }

}
