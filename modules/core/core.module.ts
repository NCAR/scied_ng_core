import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenulistModule } from '../menulist/menulist.module';
import { SciedFooterModule } from '../scied-footer/scied-footer.module';
import { VideoPlayerModule } from '../video-player/video-player.module';
import { ScreensaverModule } from '../screensaver/screensaver.module';

@NgModule({
  imports: [
    CommonModule,
    MenulistModule,
    VideoPlayerModule,
    SciedFooterModule,
    ScreensaverModule
  ],
  declarations: [],
  providers: [ ]
})
export class CoreModule { }
