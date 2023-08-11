import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PaAttrDirective} from "./attr.directive";

@NgModule({
    declarations: [
        AppComponent, PaAttrDirective
    ],
    imports: [
        BrowserModule, FormsModule, ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
