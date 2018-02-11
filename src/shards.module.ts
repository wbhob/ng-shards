import { NgModule } from '@angular/core';

import { ShardsApp } from './app/app.component';
import { ShardsButton } from './button/button.component';

@NgModule({
  declarations: [
    ShardsApp,
    ShardsButton,
  ],
  exports: [
    ShardsApp,
    ShardsButton,
  ]
})
export class ShardsModule { }
