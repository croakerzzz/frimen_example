import {Component} from "@angular/core";
import {DiscountService} from "../discount.service";

@Component({
    selector: "paDiscountEditor",
    template: `
        <div class="form-group">
            <label>Discount</label>
            <input [(ngModel)]="dis.discount"
                   class="form-control" type="number"/>
        </div>`
})
export class PaDiscountEditorComponent {

    dis!: DiscountService;

    constructor(private discounter: DiscountService) {
        this.dis = discounter;
    }

}