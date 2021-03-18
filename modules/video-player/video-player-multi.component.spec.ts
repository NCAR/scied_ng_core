import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { RouterTestingModule } from '@angular/router/testing';
import { WebappService } from '../../services/webapp/webapp.service';
import { MockWebappService } from '../../services/webapp/webapp.service.mock';
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
        VgControlsModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: WebappService,
          useClass: MockWebappService
        }
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
