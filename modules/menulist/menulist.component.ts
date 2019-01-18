import { Component, Input, OnInit } from '@angular/core';
import { WebappService } from '../../services/webapp/webapp.service';

@Component({
  selector: 'scied-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.scss']
})
export class MenulistComponent implements OnInit {
  @Input() data:any;
  @Input() itemClass:string = '';
  customClass:any;

  constructor(public webapp: WebappService) { }

  ngOnInit() {
  }
  ngOnChanges(){
      this.getMenu();
  }

  getMenu():void {
    if(this.data && this.data != ""){

          // custom classes for better column alignments
          let length = this.data.length;
          if(length == 4){
            this.customClass="col2";
          } else if(length == 8){
            this.customClass="col4";
          }


    }
  }
}
