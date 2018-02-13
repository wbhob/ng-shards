import { Component, NgZone, ViewChild } from '@angular/core';

import { ShardsAlert } from '../../lib';

@Component({
  selector: 'my-app',
  template: `
  <shards-app>
    <sh-badge outline color="danger" squared>13</sh-badge>
</shards-app>
  `
})
export class AppComponent {

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.zone.run(() => {
      setInterval(() => {

      }, 1000);
    });
  }
}
