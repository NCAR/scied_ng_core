import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgCoreModule } from 'videogular2/core';
import { VgBufferingModule } from 'videogular2/buffering';
import { VgControlsModule } from 'videogular2/controls';
import { VideoPlayerSingleComponent } from './video-player-single.component';

describe('VideoPlayerSingleComponent', () => {
  let component: VideoPlayerSingleComponent;
  let fixture: ComponentFixture<VideoPlayerSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        VgCoreModule,
        VgOverlayPlayModule,
        VgBufferingModule,
        VgControlsModule
      ],
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
