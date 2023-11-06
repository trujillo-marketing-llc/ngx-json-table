import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../key/key.component";
import * as i2 from "../value/value.component";
export class NgxJsonTableTrowComponent {
    constructor() {
        this.onChange = new EventEmitter();
    }
    onMouseEnterListener() {
        this.item.showEditPanel = true;
    }
    onMouseLeaveListener() {
        this.item.showEditPanel = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxJsonTableTrowComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: NgxJsonTableTrowComponent, selector: "[ngx-json-table-trow]", inputs: { item: "item", settings: "settings", icons: "icons" }, outputs: { onChange: "onChange" }, host: { listeners: { "mouseenter": "onMouseEnterListener()", "mouseleave": "onMouseLeaveListener()" } }, ngImport: i0, template: "<td ngx-json-table-key [style]=\"{width: settings.key.width}\"\n    [item]=\"item\"\n    [settings]=\"settings\"\n    [icons]=\"icons\"\n    (onChange)=\"onChange.emit($event)\">\n</td>\n<td ngx-json-table-value\n    [style]=\"{width: settings.value.width}\"\n    [item]=\"item\" class=\"row-value\"\n    [settings]=\"settings\"\n    (onChange)=\"onChange.emit($event)\">\n</td>\n", styles: [""], dependencies: [{ kind: "component", type: i1.NgxJsonTableKeyComponent, selector: "[ngx-json-table-key]", inputs: ["item", "settings", "icons"], outputs: ["onChange"] }, { kind: "component", type: i2.NgxJsonTableValueComponent, selector: "[ngx-json-table-value]", inputs: ["item", "settings"], outputs: ["onChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxJsonTableTrowComponent, decorators: [{
            type: Component,
            args: [{ selector: '[ngx-json-table-trow]', template: "<td ngx-json-table-key [style]=\"{width: settings.key.width}\"\n    [item]=\"item\"\n    [settings]=\"settings\"\n    [icons]=\"icons\"\n    (onChange)=\"onChange.emit($event)\">\n</td>\n<td ngx-json-table-value\n    [style]=\"{width: settings.value.width}\"\n    [item]=\"item\" class=\"row-value\"\n    [settings]=\"settings\"\n    (onChange)=\"onChange.emit($event)\">\n</td>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { item: [{
                type: Input
            }], settings: [{
                type: Input
            }], icons: [{
                type: Input
            }], onChange: [{
                type: Output
            }], onMouseEnterListener: [{
                type: HostListener,
                args: ['mouseenter']
            }], onMouseLeaveListener: [{
                type: HostListener,
                args: ['mouseleave']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtanNvbi10YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvdGJvZHkvdHJvdy90cm93LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1qc29uLXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy90Ym9keS90cm93L3Ryb3cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFVckYsTUFBTSxPQUFPLHlCQUF5QjtJQU9wQztRQUZVLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztJQUd2RCxDQUFDO0lBR0Qsb0JBQW9CO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBR0Qsb0JBQW9CO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOytHQWxCVSx5QkFBeUI7bUdBQXpCLHlCQUF5Qix5UUNWdEMsOFhBWUE7OzRGREZhLHlCQUF5QjtrQkFMckMsU0FBUzsrQkFDRSx1QkFBdUI7MEVBTXhCLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDSSxRQUFRO3NCQUFqQixNQUFNO2dCQU1QLG9CQUFvQjtzQkFEbkIsWUFBWTt1QkFBQyxZQUFZO2dCQU0xQixvQkFBb0I7c0JBRG5CLFlBQVk7dUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEpzb25UcmVlTm9kZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9qc29uLXRyZWUtbm9kZSc7XG5pbXBvcnQgeyBKc29uVHJlZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vbGliL2hlbHBlcnMnO1xuaW1wb3J0IHsgSWNvbnMsIFNldHRpbmdzIH0gZnJvbSAnLi4vLi4vLi4vbGliL3NldHRpbmdzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW25neC1qc29uLXRhYmxlLXRyb3ddJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Ryb3cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90cm93LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4SnNvblRhYmxlVHJvd0NvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgaXRlbTogSnNvblRyZWVOb2RlO1xuICBASW5wdXQoKSBzZXR0aW5nczogU2V0dGluZ3M7XG4gIEBJbnB1dCgpIGljb25zOiBJY29ucztcbiAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxKc29uVHJlZUV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gIG9uTW91c2VFbnRlckxpc3RlbmVyKCkge1xuICAgIHRoaXMuaXRlbS5zaG93RWRpdFBhbmVsID0gdHJ1ZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBvbk1vdXNlTGVhdmVMaXN0ZW5lcigpIHtcbiAgICB0aGlzLml0ZW0uc2hvd0VkaXRQYW5lbCA9IGZhbHNlO1xuICB9XG5cbn1cbiIsIjx0ZCBuZ3gtanNvbi10YWJsZS1rZXkgW3N0eWxlXT1cInt3aWR0aDogc2V0dGluZ3Mua2V5LndpZHRofVwiXG4gICAgW2l0ZW1dPVwiaXRlbVwiXG4gICAgW3NldHRpbmdzXT1cInNldHRpbmdzXCJcbiAgICBbaWNvbnNdPVwiaWNvbnNcIlxuICAgIChvbkNoYW5nZSk9XCJvbkNoYW5nZS5lbWl0KCRldmVudClcIj5cbjwvdGQ+XG48dGQgbmd4LWpzb24tdGFibGUtdmFsdWVcbiAgICBbc3R5bGVdPVwie3dpZHRoOiBzZXR0aW5ncy52YWx1ZS53aWR0aH1cIlxuICAgIFtpdGVtXT1cIml0ZW1cIiBjbGFzcz1cInJvdy12YWx1ZVwiXG4gICAgW3NldHRpbmdzXT1cInNldHRpbmdzXCJcbiAgICAob25DaGFuZ2UpPVwib25DaGFuZ2UuZW1pdCgkZXZlbnQpXCI+XG48L3RkPlxuIl19