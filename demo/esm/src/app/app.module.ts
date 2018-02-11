import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShardsModule } from '../../lib';
import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule, ShardsModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
