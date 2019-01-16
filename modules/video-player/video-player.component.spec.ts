import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayerSingleComponent } from './video-player-single.component';

describe('VideoPlayerComponent', () => {
  let component: VideoPlayerSingleComponent;
  let fixture: ComponentFixture<VideoPlayerSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPlayerSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlayerSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
