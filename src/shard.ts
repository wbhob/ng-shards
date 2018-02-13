import { ElementRef, Renderer2 } from '@angular/core';

export class Shard {

    _color = 'primary';
    _colorStore = 'primary';

    constructor(
        public elementRef: ElementRef['nativeElement'],
        public renderer: Renderer2
    ) { }

    setClass(className: string, val: boolean) {
        if (val === false) {
            this.renderer.removeClass(this.elementRef.nativeElement, className);
        } else {
            this.renderer.addClass(this.elementRef.nativeElement, className);
        }
    }

    setColor(color: string, prefix: string) {
        this.setClass(prefix + this._colorStore, false);
        this._colorStore = this._color;
        this._color = color;
        console.log(this._colorStore, this._color);

        this.setClass(prefix + this._color, true);
    }
}
