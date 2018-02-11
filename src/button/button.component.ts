import { Component, HostBinding, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: '[sh-button]',
    template: `
        <ng-content></ng-content>
    `
})

export class ShardsButton implements OnInit {

    @HostBinding('class.btn') btn = true;

    constructor(
        private renderer: Renderer2
    ) { }

    ngOnInit() { }
}