import { Component, EventEmitter, Input, Output, OnInit, OnDestroy} from '@angular/core';
import { Router,  ActivatedRoute, Params } from '@angular/router';
import { ISubscription } from "rxjs/Subscription";
import { WebappService } from '../../services/webapp/webapp.service';

@Component({
  selector: 'scied-video-player-multi',
  templateUrl: './video-player-multi.component.html',
  styleUrls: ['./video-player-multi.component.scss']
})
export class VideoPlayerMultiComponent implements OnInit {
  @Input() videos:any = null;
  @Output() onTitleChange = new EventEmitter<string>();
  id:any = null;
  subscription: ISubscription = null;
  item:any = null;

  constructor(private router: Router, private route: ActivatedRoute, public webapp: WebappService) {

  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getItem();
    });
  }


  getItem(){
    if(this.videos && this.videos.length){
      for(let i=0;i<this.videos.length;i++){
        if(this.videos[i].id == this.id){
          this.item = this.videos[i];
          this.setTitleChange(this.item.content.title);
          break;
        }
      }
    }
  }
  setTitleChange(val:string){
    this.onTitleChange.emit(val);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
