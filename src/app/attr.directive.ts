import {Directive, ElementRef, Input, OnInit} from "@angular/core";

@Directive({
    selector: "[pa-attr]",
})
export class PaAttrDirective implements OnInit {

    constructor(private element: ElementRef) {
    }

    @Input("pa-attr")
    bgClass?: string | null;

    ngOnInit() {
        this.element.nativeElement.classList.add(this.bgClass || "bg-success");
    }

}