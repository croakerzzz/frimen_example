import {Component, Input} from '@angular/core';
import {Model} from "../model/repository.model";
import {Product} from "../model/product.model";

@Component({
    selector: 'pa-product-table',
    templateUrl: './product-table.component.html',
    styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {

    taxRate = "0";

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
