import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { VgCoreModule } from '@videogular/ngx-videogular/compiled/core';
import { VgControlsModule } from '@videogular/ngx-videogular/compiled/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/compiled/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/compiled/buffering';
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
