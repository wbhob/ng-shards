import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<shards-app><button sh-button> M</button></shards-app>`
})
export class AppComponent {
  public header: string = 'UMD Demo';
}
