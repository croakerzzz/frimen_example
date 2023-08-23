import {ChangeDetectorRef, Directive, Input, KeyValueDiffer, KeyValueDiffers, SimpleChange} from "@angular/core";
import {DiscountService} from "./discount.service";

@Directive({
    selector: "td[pa-price]",
    exportAs: "discount"
})
export class PaDiscountAmountDirective {
    private differ!: KeyValueDiffer<any, any>;

    constructor(private keyValueDiffers: KeyValueDiffers,
                private changeDetector: ChangeDetectorRef,
                private discount: DiscountService) {
    }

    @Input("pa-price")
    originalPrice!: number;

    discountAmount!: number;

    ngOnInit() {
        this.differ = this.keyValueDiffers.find(this.discount).create();
    }

    ngOnChanges(changes: { [property: string]: SimpleChange }) {
        console.log('on change');

        if (changes["originalPrice"] != null) {
            this.updateValue();
        }
    }

    ngDoCheck() {
        const diff = this.differ.diff(this.discount);

        if (diff != null) {
            console.log(diff);

            this.updateValue();
        }
    }

    private updateValue() {
        this.discountAmount = this.originalPrice
            - this.discount.applyDiscount(this.originalPrice);
    }
}