import { Component, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

import { Shard } from '../shard';

@Component({
    selector: '[sh-button]',
    template: `
        <ng-content></ng-content>
    `
})

export class ShardsButton extends Shard implements OnInit {

    @HostBinding('class.btn') btn = true;

    private _outline = false;

    @Input()
    set color(color: string) {
        if (color) {
            this.setButtonColor(color);
        }
    }

    @Input()
    set outline(set: boolean) {
        if (set !== false) {
            this._outline = true;
        } else {
            this._outline = false;
        }
        this.setButtonColor(this._color);
    }

    @Input()
    set pill(val: boolean) {
        this.setClass('btn-pill', val);
    }

    @Input()
    set squared(val: boolean) {
        this.setClass('btn-squared', val);
    }

    @Input()
    set large(val: boolean) {
        this.setClass('btn-lg', val);
    }

    @Input()
    set small(val: boolean) {
        this.setClass('btn-sm', val);
    }

    constructor(
        elementRef: ElementRef,
        renderer: Renderer2
    ) {
        super(elementRef, renderer);
    }

    ngOnInit() {
        if (!this._color) {
            this.setButtonColor('primary');
        }
    }

    private setButtonColor(color: string) {

        this.setClass('btn-outline-' + this._colorStore, false);
        this.setClass('btn-' + this._colorStore, false);

        if (this._outline) {
            this.setColor(color, 'btn-outline-');
        } else {
            this.setColor(color, 'btn-');
        }
    }
}
