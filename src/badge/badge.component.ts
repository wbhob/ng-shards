import { Component, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

import { Shard } from '../shard';

@Component({
    selector: 'sh-badge,[sh-badge]',
    template: `
        <ng-content></ng-content>
    `
})
export class ShardsBadge extends Shard implements OnInit {

    @HostBinding('class.badge') btn = true;

    private _outline = false;

    @Input()
    set color(color: string) {
        if (color) {
            this.setBadgeColor(color);
        }
    }

    @Input()
    set outline(set: boolean) {
        if (set !== false) {
            this._outline = true;
        } else {
            this._outline = false;
        }
        this.setBadgeColor(this._color);
    }

    @Input()
    set pill(val: boolean) {
        this.setClass('badge-pill', val);
    }

    @Input()
    set squared(val: boolean) {
        this.setClass('badge-squared', val);
    }

    constructor(
        elementRef: ElementRef,
        renderer: Renderer2
    ) {
        super(elementRef, renderer);
    }

    ngOnInit() {
        if (!this._color) {
            this.setBadgeColor('primary');
        }
    }

    private setBadgeColor(color: string) {

        console.log(color);

        this.setClass('badge-outline-' + this._colorStore, false);
        this.setClass('badge-' + this._colorStore, false);

        if (this._outline) {
            this.setColor(color, 'badge-outline-');
        } else {
            this.setColor(color, 'badge-');
        }
    }
}
