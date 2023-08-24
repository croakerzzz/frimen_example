import {Component} from '@angular/core';
import {Model} from "../model/repository.model";
import {Product} from "../model/product.model";

@Component({
    selector: 'pa-product-table',
    templateUrl: './product-table.component.html',
    styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {

    constructor(private model: Model) {
    }

    taxRate = "0";

    dateObject: Date = new Date(2020, 1, 20);
    dateString: string = "2020-02-20T00:00:00.000Z";
    dateNumber: number = 1582156867500;

    // @Input("model")
    // dataModel!: Model;

    categoryFilter: any;

    getProduct(key: number): Product | undefined {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    deleteProduct(key: number) {
        this.model.deleteProduct(key);
    }

    setTaxRate($event: any) {
        this.taxRate = $event.target.value
    }
}
