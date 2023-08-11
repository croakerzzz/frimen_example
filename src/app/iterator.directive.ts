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
                index,
                odd: index % 2 == 1,
                even: index % 2 == 0
            };

            this.container.createEmbeddedView(this.template, context);

            setInterval(() => {
                context.odd = !context.odd;
                context.even = !context.even;
                context.$implicit.price++;
            }, 2000);
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