import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../../services/data/data.service';
import { MockDataService } from '../../services/data/data.service.mock';
import { WebappService } from '../../services/webapp/webapp.service';
import { MockWebappService } from '../../services/webapp/webapp.service.mock';
import { FactsComponent } from './facts.component';

describe('FactsComponent', () => {
  let component: FactsComponent;
  let fixture: ComponentFixture<FactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DataService,
          useClass: MockDataService
        },
        {
          provide: WebappService,
          useClass: MockWebappService
        }
      ],
      declarations: [ FactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
