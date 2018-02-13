import { Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';

import { Shard } from '../shard';

@Component({
    selector: 'sh-alert,[sh-alert]',
    template: `
    <div [ngClass]="classes" class="alert" [hidden]="!shown">
        <button *ngIf="_dismissible" type="button"
            class="close" data-dismiss="alert" aria-label="Close" (click)="dismiss()">
            <span aria-hidden="true">&times;</span>
        </button>
        <ng-content></ng-content>
    </div>
    `
})
export class ShardsAlert extends Shard {

    _dismissible = false;
    classes = ['alert', 'alert-primary'];

    shown = true;

    @Output() onDismiss: EventEmitter<boolean> = new EventEmitter();

    @Input()
    set color(color: string) {
        this.classes[1] = 'alert-' + color;
    }

    @Input()
    set dismissible(val: boolean) {
        if (val !== false) {
            this._dismissible = true;
            this.classes[2] = 'alert-dismissible';
        } else {
            this._dismissible = false;
            this.classes[2] = undefined;
        }
    }

    constructor(
        elementRef: ElementRef,
        renderer: Renderer2
    ) {
        super(elementRef, renderer);
    }

    dismiss() {
        this.shown = false;
    }

    show() {
        this.shown = true;
    }
}
