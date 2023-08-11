import {Directive, DoCheck, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
    selector: "[paForOf]"
})
export class PaIteratorDirective implements OnChanges, DoCheck {
    constructor(private container: ViewContainerRef,
                private template: TemplateRef<Object>) {
    }

    collection!: any[];

    @Input()
    set paForOf(collection: any[]) {
        this.collection = collection;

        this.updateContent();
    }

    ngOnChanges(changes: SimpleChanges): void {

        console.log('OnChanges');

    }

    ngDoCheck(): void {

        console.log('DoCheck');

        this.updateContent();

    }

    private updateContent() {
        this.container.clear();

        this.collection.forEach((item, index) => {
            const context = {
                $implicit: item,
                index,
                odd: index % 2 == 1,
                even: index % 2 == 0
            };

            this.container.createEmbeddedView(this.template, context);

            // setInterval(() => {
            //     context.odd = !context.odd;
            //     context.even = !context.even;
            //     context.$implicit.price++;
            // }, 2000);
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