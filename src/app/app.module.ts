import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PaAttrDirective} from "./attr.directive";
import {PaModel} from "./twoway.directive";
import {PaStructureDirective} from "./paif.directive";
import {PaIteratorDirective} from "./iterator.directive";
import {PaCellColor} from "./cellColor.directive";
import {PaCellColorSwitcher} from "./cellColorSwitcher.directive";
import {ProductTableComponent} from './product-table/product-table.component';
import {ProductFormComponent} from './product-form/product-form.component';
import {ToggleViewComponent} from './toggle-view/toggle-view.component';
import {PaAddTaxPipe} from "./addTax.pipe";
import {PaCategoryFilterPipe} from "./categoryFilter.pipe";
import {PaDiscountDisplayComponent} from "./discount-display/discount-display.component";
import {PaDiscountEditorComponent} from "./discount-editor/discount-editor.component";

@NgModule({
    declarations: [
        AppComponent,
        PaAttrDirective,
        PaModel,
        PaStructureDirective,
        PaIteratorDirective,
        PaCellColor,
        PaCellColorSwitcher,
        ProductTableComponent,
        ProductFormComponent,
        ToggleViewComponent,
        PaAddTaxPipe,
        PaCategoryFilterPipe,
        PaDiscountDisplayComponent,
        PaDiscountEditorComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
