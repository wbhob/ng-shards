import { NgModule } from '@angular/core';

import { ShardsApp } from './app/app.component';
import { ShardsButtonGroup } from './button_group/button_group.component';
import { ShardsButton } from './button/button.component';

@NgModule({
  declarations: [
    ShardsApp,
    ShardsButton,
    ShardsButtonGroup
  ],
  exports: [
    ShardsApp,
    ShardsButton,
    ShardsButtonGroup
  ]
})
export class ShardsModule { }
