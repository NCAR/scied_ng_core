import { Injectable } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList, CdkDragEnter, CdkDragExit } from '@angular/cdk/drag-drop';
import { DataService } from '../../services/data/data.service';

@Injectable()
export class SortingGameService {
  gameInit = {
    score:0,
    progressPercent:"33%",
    numberOfTiles:0,
    credits: "",
    response : {
      title:"",
      titleclass:"normal",
      body:""
    },
    dropzones: []
  };
  game = Object.create(this.gameInit);

  modal = {
    title: "",
    body: ""
  };

  showModal: boolean = false;
  tiles = [];
  dropBins = [];
  bins = [];
  data:any;
  level:any;

  constructor(private dataService: DataService) {}
  setupGame(data, level){
    this.data = data;
    this.level = level;
    this.setProgressPercent();
    this.initTiles();
    this.initDropZones();
    this.initResponse();
    this.game.numberOfTiles = this.tiles.length;
    this.game.credits = data.game.credits;
  }
  initTiles(){
    this.tiles = [];
    let keys = this.dataService.getKeys(this.data.draggables);
    for(let key in this.data.draggables){
      if(this.data.draggables.hasOwnProperty(key)){
        if(this.data.draggables[key].hasOwnProperty(this.level)){
          this.tiles.push(this.data.draggables[key]);
        }
      }
    }
    this.tiles = this.dataService.shuffle(this.tiles);
  }
  setProgressPercent(){
    let keys = this.dataService.getKeys(this.data.levels);
    let last_level = "";

    keys.forEach((key)=>{
      last_level = key
    });

    let current_level = this.level.replace('level', '');
    last_level = last_level.replace('level', '');
    let value:any = (parseInt(current_level) / parseInt(last_level)) * 100;
    this.game.progressPercent = value + '%';
  }

  initDropZones() {
    //zones
    this.game.dropzones = this.data.dropzones[this.level];
    let dropList = [];
    for (let key in this.data.dropzones[this.level]) {
      if (this.data.dropzones[this.level].hasOwnProperty(key)) {
        dropList.push(this.data.dropzones[this.level][key].id);
      }
    }

    // bins
    for (let i = 0; i < this.data.dropzones[this.level].length; i++) {
      let emptyBin = [];
      if (!this.dropBins[this.data.dropzones[this.level][i].id]) {
        this.dropBins[this.data.dropzones[this.level][i].id] = [];
      }

      if (this.bins.indexOf(this.data.dropzones[this.level][i].id) == -1) {
        this.bins.push(this.data.dropzones[this.level][i].id);
      }
    }
  }

  initResponse(){
    this.game.response.title = this.data.levels[this.level].directions.heading;
    this.game.response.body = this.data.levels[this.level].directions.description;
  }
  drop(event: CdkDragDrop<string[]>) {
    let item_class = event.item.element.nativeElement.classList;
    let bin_id = event.container.element.nativeElement.id;

    // only do response if not resorting
    if(event.previousContainer != event.container){
      this.game.response.title = event.item.data[this.level].response[bin_id].title;
      this.game.response.body = event.item.data[this.level].response[bin_id].body;
    }

    if (!item_class.contains(bin_id)) {
      this.game.response.titleclass = "incorrect animate";
      this.playAudio('incorrect');
      this.game.score -= 1;
      // timeout and remove animate
       setTimeout(() => { this.game.response.titleclass = "incorrect"; }, 1000);
      return;
    } else if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.game.response.titleclass = "correct animate";
      this.playAudio('correct');
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        this.game.numberOfTiles--;
        this.game.score += 10;
        setTimeout(() => { this.game.response.titleclass = "correct"; }, 1000);
        this.checkFinished();
    }
  }

  checkFinished(){
    if(this.game.numberOfTiles == 0){
      this.playAudio('complete');
    }
  }
  playAudio(audioid){
    let audioPlayer : HTMLVideoElement = <HTMLVideoElement> document.getElementById(audioid);
    audioPlayer.play();
  }
  noReturnPredicate() {
    return false;
  }
  toggleCreditsModal() {
    this.modal.title = "Credits";
    this.modal.body = this.data.game.credits;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
  resetGame() {
    this.game = Object.create(this.gameInit);
    this.game.response.titleclass = "normal";
    this.tiles = [];
    this.dropBins = [];
    this.bins = [];
  }
}
