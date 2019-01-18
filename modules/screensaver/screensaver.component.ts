import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebappService } from '../../services/webapp/webapp.service';
import { interval } from 'rxjs/observable/interval';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'scied-screensaver',
  templateUrl: './screensaver.component.html',
  styleUrls: ['./screensaver.component.scss']
})
export class ScreensaverComponent implements OnInit, OnDestroy {
  subscribe:any;
  chosenImg:any;
  chosenImgIndex:number = 0;
  totalImgs:number = 0;
  imgList:any;
  constructor(private outlet: RouterOutlet, public webapp: WebappService) {
    this.imgList = outlet.activatedRouteData['images']
    this.totalImgs = this.imgList.length;
  }
  rotateImg(){
    let index = Math.floor(Math.random()*this.totalImgs)
    if(index != this.chosenImgIndex){
      this.chosenImgIndex = index;
      this.chosenImg = this.imgList[this.chosenImgIndex];
    }
  }

  ngOnInit() {
    // pick an image
    this.chosenImg = this.imgList[this.chosenImgIndex];
    const source = interval(10000);

    this.subscribe = source.subscribe((val) => {this.rotateImg()});
  }
  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }

}
