import {Inject, Injectable} from "@angular/core";
import {LOG_SERVICE, LogLevel, LogService} from "./log.service";

@Injectable()
export class DiscountService {

    private logger?: LogService;

    constructor( @Inject(LOG_SERVICE) loggers: LogService[]) {
        this.logger = loggers.find(l => l.minimumLevel == LogLevel.DEBUG);
    }

    private discountValue: number = 10;

    public get discount(): number {
        return this.discountValue;
    }

    public set discount(newValue: number) {
        this.discountValue = newValue || 0;
    }

    public applyDiscount(price: number) {
        this.logger?.logInfoMessage(`Discount ${this.discount}` + ` applied to price: ${price}`);
        return price - price * this.discountValue / 100;
    }
}