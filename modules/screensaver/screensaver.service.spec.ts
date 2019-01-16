import { TestBed } from '@angular/core/testing';

import { ScreensaverService } from './screensaver.service';

describe('ScreensaverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScreensaverService = TestBed.get(ScreensaverService);
    expect(service).toBeTruthy();
  });
});
