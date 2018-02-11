import { Component, ElementRef, HostBinding, OnInit, Renderer2 } from '@angular/core';

import { Shard } from '../shard';

@Component({
    selector: 'sh-button-group,[sh-button-group]',
    template: `
        <ng-content></ng-content>
    `
})
export class ShardsButtonGroup extends Shard {

    @HostBinding('class.btn-group') btnGroup = true;

    constructor(
        elementRef: ElementRef,
        renderer: Renderer2
    ) {
        super(elementRef, renderer);
    }
}