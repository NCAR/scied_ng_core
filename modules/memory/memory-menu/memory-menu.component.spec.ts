import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import { SciedModalModule } from '../../scied-modal/scied-modal.module';
import { MemoryMenuComponent } from './memory-menu.component';

describe('MemoryMenuComponent', () => {
  let component: MemoryMenuComponent;
  let fixture: ComponentFixture<MemoryMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatGridListModule,
        SciedModalModule
      ],
      declarations: [ MemoryMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
