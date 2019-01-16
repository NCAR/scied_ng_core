import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenulistModule } from '../menulist/menulist.module';
import { SciedFooterModule } from '../scied-footer/scied-footer.module';
import { VideoPlayerModule } from '../video-player/video-player.module';
import { ScreensaverModule } from '../screensaver/screensaver.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    MenulistModule,
    SciedFooterModule,
    VideoPlayerModule,
    ScreensaverModule
  ]
})
export class SharedModule {}
