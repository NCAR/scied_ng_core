import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../services/data/data.service';
import { WebappService } from '../../../services/webapp/webapp.service';
import { SortingGameService } from '../sorting-game.service';


@Component({
  selector: 'scied-sorting-game',
  templateUrl: './sorting-game.component.html',
  styleUrls: ['./sorting-game.component.scss']
})
export class SortingGameComponent implements OnInit {
  @Input() data:any;
  @Input() baseUrl:any;
  @Input() level:any;
  game = {
    score:0,
    progressPercent:"33%"
  };

  modal = {
    title:"",
    body:""
  };
  showModal:boolean = false;

  constructor(private dataService: DataService, public webapp: WebappService, private sortingGameService: SortingGameService) { }

  ngOnInit(){}
  ngOnChanges(){
    this.loadData();
  }
  loadData(){
    console.log(this.data);
  }

  toggleCreditsModal(){
    this.modal.title = "Credits";
    this.modal.body = this.data.game.credits.text;
    this.showModal = true;
  }

  closeModal(){
    this.showModal = false;
  }

  ngOnDestroy(){
    this.sortingGameService.resetGame();
  }

}
