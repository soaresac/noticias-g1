import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appAutoplayOnHover]'
})
export class AutoplayOnHoverDirective {

    constructor(
        private el: ElementRef,
        private render: Renderer2
        ) {}

    @HostListener('mouseover')
    AutoplayOn() {
        this.el.nativeElement.play();
    }

    @HostListener('mouseleave')
    AutoplayOff() {
        this.el.nativeElement.pause();
        this.el.nativeElement.load();
    }
 }