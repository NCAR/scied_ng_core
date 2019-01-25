import { Injectable } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Injectable()
export class SortingGameService {
  game = {
    score:0,
    progressPercent:"33%"
  };
  tiles = [];
  data:any;
  level:any;

  constructor(private dataService: DataService) {}
  setupGame(data, level){
    this.data = data;
    this.level = level;
    this.setProgressPercent();
    this.setTiles();
  }
  setTiles(){
    this.tiles = [];
    let keys = this.dataService.getKeys(this.data.draggables);
    for(let key in this.data.draggables){
      if(this.data.draggables.hasOwnProperty(key)){
        if(this.data.draggables[key].hasOwnProperty(this.level)){
          this.tiles.push(this.data.draggables[key]);
        }
      }
    }
  }
  setProgressPercent(){
    let keys = this.dataService.getKeys(this.data.levels);
    let last_level = "";

    keys.forEach((key)=>{
      last_level = key
    });


    var current_level = this.level.replace('level', '');
    last_level = last_level.replace('level', '');
    let value:any = (parseInt(current_level) / parseInt(last_level)) * 100;
    this.game.progressPercent = value + '%';
  }

  resetGame() {}
}
