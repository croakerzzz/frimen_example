import {Component, Input} from '@angular/core';
import {Model} from "../model/repository.model";
import {Product} from "../model/product.model";
import {DiscountService} from "../discount.service";

@Component({
    selector: 'pa-product-table',
    templateUrl: './product-table.component.html',
    styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {

    taxRate = "0";

    dateObject: Date = new Date(2020, 1, 20);
    dateString: string = "2020-02-20T00:00:00.000Z";
    dateNumber: number = 1582156867500;

    @Input("model")
    dataModel!: Model;
    categoryFilter: any;

    getProduct(key: number): Product | undefined {
        return this.dataModel.getProduct(key);
    }

    getProducts(): Product[] {
        return this.dataModel.getProducts();
    }

    deleteProduct(key: number) {
        this.dataModel.deleteProduct(key);
    }

    setTaxRate($event: any) {
        this.taxRate = $event.target.value
    }
}
