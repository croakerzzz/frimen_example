import {
    Directive,
    ElementRef,
    EventEmitter, HostBinding, HostListener,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChange,
    SimpleChanges
} from "@angular/core";
import {Product} from "./model/product.model";

@Directive({
    selector: "[pa-attr]",
})
export class PaAttrDirective implements OnInit, OnChanges {

    // constructor(private element: ElementRef) {
    //     this.element.nativeElement.addEventListener("click", () => {
    //         if (this.product != null) {
    //             this.click.emit(this.product.category);
    //         }
    //     });
    // }

    @Input("pa-attr")
    @HostBinding("class")
    bgClass?: string | null;

    @Input("pa-product")
    product?: Product;

    @Output("pa-category")
    click = new EventEmitter<string>();

    @HostListener("click")
    triggerCustomEvent() {
        if (this.product != null) {
            this.click.emit(this.product.category);
        }
    }

    ngOnInit() {
        // this.element.nativeElement.classList.add(this.bgClass || "bg-success");
    }

    ngOnChanges(changes: SimpleChanges) {
        // console.log(changes);
        //
        // let change = changes["bgClass"];
        // let classList = this.element.nativeElement.classList;
        // if (!change.isFirstChange() && classList.contains(change.previousValue)) {
        //     classList.remove(change.previousValue);
        // }
        // if (!classList.contains(change.currentValue)) {
        //     classList.add(change.currentValue);
        // }
    }

}