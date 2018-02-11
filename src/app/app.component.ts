import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'shards-app,[shards-app]',
    // template: 'HELLO!',
    template: '<ng-content></ng-content>',
    styleUrls: ['./app.scss'], 
    encapsulation: ViewEncapsulation.None
})

export class ShardsApp implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('initing');

    }
}
