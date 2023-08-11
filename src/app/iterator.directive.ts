import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
    selector: "[paForOf]"
})
export class PaIteratorDirective {
    constructor(private container: ViewContainerRef,
                private template: TemplateRef<Object>) {
    }

    @Input()
    set paForOf(collection: any[]) {
        this.container.clear();

        collection.forEach((item, index) => {
            const context = {
                $implicit: item,
                index
            };

            this.container.createEmbeddedView(this.template, context);
        });
    }

    // ngOnInit() {
    //     this.container.clear();
    //     for (let i = 0; i < this.dataSource.length; i++) {
    //         this.container.createEmbeddedView(this.template,
    //             new PaIteratorContext(this.dataSource[i]));
    //     }
    // }
}

// class PaIteratorContext {
//     constructor(public $implicit: any) {
//     }
// }