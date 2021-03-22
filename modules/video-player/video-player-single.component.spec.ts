import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { RouterTestingModule } from '@angular/router/testing';
import { WebappService } from '../../services/webapp/webapp.service';
import { MockWebappService } from '../../services/webapp/webapp.service.mock';
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
        VgControlsModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: WebappService,
          useClass: MockWebappService
        }
      ],
      declarations: [VideoPlayerSingleComponent]
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
