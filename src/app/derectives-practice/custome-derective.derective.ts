import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[customeDerective]'
})

export class CustomeDerective implements OnInit {
    @Input() defaultColor: string = "transparent";
    @Input('customeDerective') highLightColor: string = "red";
    @HostBinding('style.backgroundColor') backgroundColor: string | undefined;
    constructor(private elementRef: ElementRef, private render: Renderer2) {
    }
    ngOnInit(): void {
        this.backgroundColor = this.defaultColor;
        // this.elementRef.nativeElement.style.backgroundColor = 'green';
        // this.render.setStyle(this.elementRef.nativeElement,'background-color','yellow');
    }

    @HostListener('mouseenter') test(event: Event) {
        // this.render.setStyle(this.elementRef.nativeElement,'background-color','yellow');
        this.backgroundColor = this.highLightColor;
    }

    @HostListener('mouseleave') test2(event: Event) {
        // this.render.setStyle(this.elementRef.nativeElement,'background-color','transparent');
        this.backgroundColor = this.defaultColor;

    }
}