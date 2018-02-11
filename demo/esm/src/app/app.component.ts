import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <shards-app>
    <div sh-button-group>
        <button sh-button [color]="color" [pill]="pill"> Color my World</button>
        <button sh-button [color]="'secondary'" [pill]="false"> Color my World</button>
    </div>
</shards-app>
  `
})
export class AppComponent {
  color = "secondary"
  pill = false;

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.zone.run(() => {
      setInterval(() => {
        if (this.pill) {
          this.color = 'primary';
          this.pill = false;
        } else {
          this.color = 'danger';
          this.pill = true;
        }
      }, 1000);
    });
  }
}
