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
    private _color = 'primary';
    private _colorStore: string = '';

    @Input()
    set color(color: string) {
        if (color) {
            this._colorStore = this._color;
            this._color = color;
            this.setColor();
        }
    }

    @Input()
    set outline(set: boolean) {
        if (set !== false) {
            this._outline = true;
        } else {
            this._outline = false;
        }
        this.setColor();
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
        this.setColor();
    }

    private setColor() {
        this.setClass('btn-outline-' + this._colorStore, false);
        this.setClass('btn-' + this._colorStore, false);
        if (this._outline) {
            this.setClass('btn-outline-' + this._color, true);
        } else {
            this.setClass('btn-' + this._color, true);
        }
    }
}
