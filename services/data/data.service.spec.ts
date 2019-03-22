import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService],
      imports: [HttpClientTestingModule]
    });
    // HttpClientTestingModule - Extended interactions between a data service and the HttpClient can be complex
    // and difficult to mock with spies.
    //  The HttpClientTestingModule can make these testing scenarios more manageable.
  });

  describe(':', () => {

    function setup() {
      const dataService = TestBed.get(DataService);
      const http = TestBed.get(HttpTestingController);
      return { dataService, http };
    }

    it('should call the data', () => {
      const { dataService, http } = setup();
      const mockData = { id: 1, country: 'United states of america', zipcode: '56743' };
      dataService.getData().subscribe(data => {
        expect(data).toEqual(mockData);
      });

      const req = http.expectOne('https:www.google.com/googleMapData');

      expect(req.request.method).toBe('GET');

      req.flush({
        mapData: mockData
      });
    });


    afterEach(() => {
      const { http } = setup();
      http.verify();
    });
  });
});
