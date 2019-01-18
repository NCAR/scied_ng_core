import { Component, Input, OnInit} from '@angular/core';
import { WebappService } from '../../services/webapp/webapp.service';

@Component({
  selector: 'scied-video-player-single',
  templateUrl: './video-player-single.component.html',
  styleUrls: ['./video-player-single.component.scss']
})
export class VideoPlayerSingleComponent implements OnInit {
  @Input() item:any;

  constructor(public webapp: WebappService) {   }



  ngOnInit() {

  }



}
