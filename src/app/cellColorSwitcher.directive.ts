import {AfterContentInit, ContentChildren, Directive, Input, OnChanges, QueryList, SimpleChanges} from "@angular/core";
import {PaCellColor} from "./cellColor.directive";

@Directive({
    selector: "table"
})
export class PaCellColorSwitcher implements OnChanges, AfterContentInit {

    @Input("paCellDarkColor")
    modelProperty!: Boolean;

    @ContentChildren(PaCellColor, {descendants: true})
    contentChildren?: QueryList<PaCellColor>;

    ngOnChanges(changes: SimpleChanges) {
        this.updateContentChildren(changes["modelProperty"].currentValue);
    }

    ngAfterContentInit(): void {
        this.contentChildren?.changes.subscribe(() => {
            setTimeout(() => this.updateContentChildren(this.modelProperty), 0);
        });
    }

    private updateContentChildren(dark: Boolean) {
        console.log(this.contentChildren);

        if (this.contentChildren != null && dark != undefined) {
            this.contentChildren.forEach((child, index) => {
                //child.setColor(index % 2 ? dark : !dark);
                child.setColor(dark);
            });
        }
    }

}
