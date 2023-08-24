import {Injectable} from "@angular/core";
import {LogService} from "./log.service";

@Injectable()
export class DiscountService {
    constructor(private logger: LogService) {
    }

    private discountValue: number = 10;

    public get discount(): number {
        return this.discountValue;
    }

    public set discount(newValue: number) {
        this.discountValue = newValue || 0;
    }

    public applyDiscount(price: number) {
        this.logger.logInfoMessage(`Discount ${this.discount}` + ` applied to price: ${price}`);
        return price - price * this.discountValue / 100;
    }
}