import {Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";

@Directive({
    selector: "[pa-attr]",
})
export class PaAttrDirective implements OnInit, OnChanges {

    constructor(private element: ElementRef) {
    }

    @Input("pa-attr")
    bgClass?: string | null;

    ngOnInit() {
        this.element.nativeElement.classList.add(this.bgClass || "bg-success");
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);

        let change = changes["bgClass"];
        let classList = this.element.nativeElement.classList;
        if (!change.isFirstChange() && classList.contains(change.previousValue)) {
            classList.remove(change.previousValue);
        }
        if (!classList.contains(change.currentValue)) {
            classList.add(change.currentValue);
        }
    }

}