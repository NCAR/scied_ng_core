import { Component, OnInit } from '@angular/core';
import { WebappService } from '../../services/webapp/webapp.service';

@Component({
  selector: 'scied-footer',
  templateUrl: './scied-footer.component.html',
  styleUrls: ['./scied-footer.component.scss']
})
export class SciedFooterComponent implements OnInit {
  constructor(public webapp: WebappService) { }

  ngOnInit() {
  }

}
