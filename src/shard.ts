import { ElementRef, Renderer2 } from '@angular/core';

export class Shard {
    constructor(
        public elementRef: ElementRef,
        public renderer: Renderer2
    ) { }

    setClass(className: string, val: boolean) {
        if (val === false) {
            this.renderer.removeClass(this.elementRef.nativeElement, className);
        } else {
            this.renderer.addClass(this.elementRef.nativeElement, className);
        }
    }
}
