import { Component, Input } from '@angular/core';

@Component ({
  selector: 'chart-image',
  templateUrl: './chart-image.component.html',
  styleUrls: ['./chart-image.component.scss']
})


export class ChartImageComponent {
  @Input() range:any = null;
  @Input() axis_y_label:any = null;
  @Input() imgPath:any = null;

  constructor (){
    if(this.imgPath){
      this.imgPath = this.imgPath+'images/climate_exhibit_co2/';
    }
  }

}
