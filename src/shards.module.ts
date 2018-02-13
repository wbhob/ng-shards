import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ShardsAlert } from './alert/alert.component';
import { ShardsApp } from './app/app.component';
import { ShardsBadge } from './badge/badge.component';
import { ShardsButtonGroup } from './button_group/button_group.component';
import { ShardsButton } from './button/button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ShardsAlert,
    ShardsApp,
    ShardsBadge,
    ShardsButton,
    ShardsButtonGroup
  ],
  exports: [
    ShardsAlert,
    ShardsApp,
    ShardsBadge,
    ShardsButton,
    ShardsButtonGroup
  ]
})
export class ShardsModule { }
