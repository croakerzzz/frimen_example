import {
    ChangeDetectorRef,
    Directive,
    DoCheck,
    Input, IterableDiffer,
    IterableDiffers,
    OnChanges,
    SimpleChanges,
    TemplateRef,
    ViewContainerRef
} from "@angular/core";

@Directive({
    selector: "[paForOf]"
})
export class PaIteratorDirective implements OnChanges, DoCheck {
    private differ!: IterableDiffer<any>;

    constructor(
        private container: ViewContainerRef,
        private template: TemplateRef<Object>,
        private differs: IterableDiffers,
        private changeDetector: ChangeDetectorRef
    ) {
    }

    collection!: any[];

    @Input()
    set paForOf(collection: any[]) {
        this.collection = collection;
    }

    ngOnChanges(changes: SimpleChanges): void {

        console.log('OnChanges');

    }

    ngDoCheck(): void {

        console.log('DoCheck');

        if (this.collection) {
            if (!this.differ) {
                this.differ = this.differs.find(this.collection).create();
            }

            // todo почитать про differ
            const changes = this.differ.diff(this.collection);

            if (changes) {
                console.log("collection changed!!!")

                this.updateContent();
            }
        }


        //this.updateContent();

    }

    private updateContent() {
        console.log('update content');

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