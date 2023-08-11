import {Component} from '@angular/core';
import {Model} from "./model/repository.model";
import {Product} from "./model/product.model";
import {ProductFormControl, ProductFormGroup} from "./form.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model: Model = new Model();
  form: ProductFormGroup = new ProductFormGroup();

  getProduct(key: number): Product | undefined {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  newProduct: Product = new Product();

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log("New Product: " + this.jsonProduct);
  }

  formSubmitted: boolean = false;

  submitForm(form: ProductFormGroup) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }

  getControlValidationMessages(name: string) {

    return (this.form.controls[name] as ProductFormControl).getValidationMessages();
  }

  key(keyName: string): keyof Product {
      return keyName as keyof Product;
  }

}
