import { TestBed } from '@angular/core/testing';
import { DataService } from '../../services/data/data.service';
import { MockDataService } from '../../services/data/data.service.mock';
import { SortingGameService } from './sorting-game.service';

describe('SortingGameService', () => {
  let service: SortingGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SortingGameService,
        {
          provide: DataService,
          useClass: MockDataService
        }
      ]
    });

  });
  beforeEach(() => {
    service = TestBed.get(SortingGameService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
