import { TestBed } from '@angular/core/testing';

import { SortingGameService } from './sorting-game.service';

describe('SortingGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SortingGameService = TestBed.get(SortingGameService);
    expect(service).toBeTruthy();
  });
});
