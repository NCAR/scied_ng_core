import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'scied-webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.scss']
})
export class WebpageComponent implements OnInit {
  @Input() url:string;

  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {

  }

  getUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
