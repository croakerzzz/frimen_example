import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PaAttrDirective} from "./attr.directive";
import {PaModel} from "./twoway.directive";
import {PaStructureDirective} from "./paif.directive";

@NgModule({
    declarations: [
        AppComponent,
        PaAttrDirective,
        PaModel,
        PaStructureDirective
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
