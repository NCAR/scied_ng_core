import { Injectable } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList, CdkDragEnter, CdkDragExit } from '@angular/cdk/drag-drop';
import { DataService } from '../../services/data/data.service';

@Injectable()
export class MockSortingGameService {
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

  }
  setProgressPercent(){

  }

  initDropZones() {

  }

  initResponse(){
  }
  drop(event: CdkDragDrop<string[]>) {

  }

  checkFinished(){

  }
  playAudio(audioid){

  }
  noReturnPredicate() {

  }
  toggleCreditsModal() {

  }

  closeModal() {

  }
  resetGame() {

  }
}
