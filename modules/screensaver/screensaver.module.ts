import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreensaverComponent } from './screensaver.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ScreensaverComponent],
  exports: [ScreensaverComponent]
})
export class ScreensaverModule {}
