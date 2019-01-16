import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SciedFooterComponent } from './scied-footer.component';

describe('SciedFooterComponent', () => {
  let component: SciedFooterComponent;
  let fixture: ComponentFixture<SciedFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SciedFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SciedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
