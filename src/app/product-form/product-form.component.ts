import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';
import {ProductFormGroup} from "../form.model";
import {Product} from "../model/product.model";

@Component({
    selector: 'pa-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {

    form: ProductFormGroup = new ProductFormGroup();

    newProduct: Product = new Product();

    formSubmitted: boolean = false;

    @Output("paNewProduct")
    newProductEvent = new EventEmitter<Product>();

    submitForm(form: any) {
        this.formSubmitted = true;
        if (form.valid) {
            this.newProductEvent.emit(this.newProduct);
            this.newProduct = new Product();
            this.form.reset();
            this.formSubmitted = false;
        }
    }

    key(keyName: string): keyof Product {
        return keyName as keyof Product;
    }

}
