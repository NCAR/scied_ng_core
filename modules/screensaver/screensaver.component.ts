import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebappService } from '../../services/webapp/webapp.service';
import { interval } from 'rxjs/observable/interval';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'scied-screensaver',
  templateUrl: './screensaver.component.html',
  styleUrls: ['./screensaver.component.scss']
})
export class ScreensaverComponent implements OnInit, OnDestroy {
  subscribe:any = null;
  chosenImg:any = null;
  chosenImgIndex:number = 0;
  totalImgs:number = 0;
  imgList:any = null;

  constructor(private route: ActivatedRoute, public webapp: WebappService) { }

  rotateImg(){
    let index = Math.floor(Math.random()*this.totalImgs)
    if(index != this.chosenImgIndex){
      this.chosenImgIndex = index;
      this.chosenImg = this.imgList[this.chosenImgIndex];
    }
  }

  ngOnInit() {
    this.imgList = this.route.snapshot.data.images;
    if(this.imgList){
      this.totalImgs = this.imgList.length;
      // pick an image
      this.chosenImg = this.imgList[this.chosenImgIndex];
      const source = interval(10000);
      this.subscribe = source.subscribe((val) => {this.rotateImg()});
    }
  }
  ngOnDestroy(){
    if(this.subscribe){
      this.subscribe.unsubscribe();
    }
  }

}
