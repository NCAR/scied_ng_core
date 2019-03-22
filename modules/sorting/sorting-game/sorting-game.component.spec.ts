import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SciedModalModule } from '../../scied-modal/scied-modal.module';
import { SortingGameComponent } from './Sorting-game.component';

describe('SortingGameComponent', () => {
  let component: SortingGameComponent;
  let fixture: ComponentFixture<SortingGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DragDropModule,
        SciedModalModule
      ],
      declarations: [ SortingGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
