import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { VideoPlayerSingleComponent } from './video-player-single.component';
import { VideoPlayerMultiComponent } from './video-player-multi.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  declarations: [
    VideoPlayerSingleComponent,
    VideoPlayerMultiComponent
  ],
  exports: [
    VideoPlayerSingleComponent,
    VideoPlayerMultiComponent
  ]
})
export class VideoPlayerModule { }
