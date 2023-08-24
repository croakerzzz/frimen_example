import {Component} from '@angular/core';
import {Model} from "./model/repository.model";
import {Product} from "./model/product.model";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    model!: Model;

    constructor(private m: Model) {
        this.model = m;
    }

    // model: Model = new Model();

    addProduct(p: Product) {
        this.model.saveProduct(p);
    }

}
