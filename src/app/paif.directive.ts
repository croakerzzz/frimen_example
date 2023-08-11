import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
    selector: "[paIf]"
})
export class PaStructureDirective {

    constructor(private container: ViewContainerRef,
                private template: TemplateRef<Object>) {
    }

    // пример из chatgpt
    @Input()
    set paIf(condition: boolean) {
        if (condition) {
            this.container.createEmbeddedView(this.template);
        } else {
            this.container.clear();
        }
    }

    // @Input("paIf")
    // expressionResult!: boolean;
    //
    // ngOnChanges(changes: SimpleChanges) {
    //     let change = changes["expressionResult"];
    //
    //     console.log(change);
    //
    //     if (!change.isFirstChange() && !change.currentValue) {
    //         this.container.clear();
    //     } else if (change.currentValue) {
    //         this.container.createEmbeddedView(this.template);
    //     }
    // }
}