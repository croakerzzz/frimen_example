import {Component, Input} from "@angular/core";
import {DiscountService} from "../discount.service";

@Component({
    selector: "paDiscountDisplay",
    template: `
        <div class="bg-info p-a-1">
            The discount is {{dis.discount}}
        </div>`
})
export class PaDiscountDisplayComponent {

    dis!: DiscountService;

    constructor(private discounter: DiscountService) {
        this.dis = discounter;
    }

}