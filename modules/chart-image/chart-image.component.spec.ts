import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartImageComponent } from './chart-image.component';

describe('ChartImageComponent', () => {
  let component: ChartImageComponent;
  let fixture: ComponentFixture<ChartImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
