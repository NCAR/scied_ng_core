import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgCoreModule } from 'videogular2/core';
import { VgBufferingModule } from 'videogular2/buffering';
import { VgControlsModule } from 'videogular2/controls';
import { VideoPlayerMultiComponent } from './video-player-multi.component';

describe('VideoPlayerMultiComponent', () => {
  let component: VideoPlayerMultiComponent;
  let fixture: ComponentFixture<VideoPlayerMultiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        VgCoreModule,
        VgOverlayPlayModule,
        VgBufferingModule,
        VgControlsModule
      ],
      declarations: [ VideoPlayerMultiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlayerMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
