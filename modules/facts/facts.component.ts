import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { WebappService } from '../../services/webapp/webapp.service';

@Component({
  selector: 'scied-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent implements OnInit {
  @Input() source:string;
  data = {
    'factId': null,
    'prevFactId': null,
    'facts': null
  };
  subscription: Subscription;

  constructor(private dataService: DataService, public webapp: WebappService) {}

  ngOnInit() {
    this.getData(this.source);
  }

  getData(url: string): void {
    if (url && url != "") {
      this.subscription = this.dataService.getData(url).subscribe(
        data => {
          this.data.facts = this.dataService.shuffle(data);
          this.newFact();
        }
      );
    }
  }

  newFact() {
      if(this.data.factId != null){
          this.data.prevFactId = this.data.factId;
      }
      this.data.factId = this.dataService.randomFromRange(0, this.data.facts.length);
      // if same, pick again
      if (this.data.prevFactId == this.data.factId) {
          this.newFact();
      }
  }
}
