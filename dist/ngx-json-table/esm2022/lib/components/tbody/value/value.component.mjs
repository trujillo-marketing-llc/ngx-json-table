import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NgxJsonTableValueComponent {
    constructor() {
        this.onChange = new EventEmitter();
    }
    onEscapeKeyListener() {
        this.item.resetState();
        this.item.edit && this.item.toggleEdit();
        if (this.item.isNew) {
            this.item.delete();
            this.onChange.emit('clean');
        }
    }
    onEnterKeyListener() {
        if (this.item.checkNotUniqueKey())
            return;
        this.item.toggleEdit();
        this.item.updateState();
        this.onChange.emit('edit');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxJsonTableValueComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: NgxJsonTableValueComponent, selector: "[ngx-json-table-value]", inputs: { item: "item", settings: "settings" }, outputs: { onChange: "onChange" }, host: { listeners: { "keyup.escape": "onEscapeKeyListener()", "keyup.enter": "onEnterKeyListener()" } }, ngImport: i0, template: "<span *ngIf=\"(!item.isNew && !settings.options.edit.value) || !item.edit || item.isComplex\">{{item.value}}</span>\n<span *ngIf=\"(item.isNew || settings.options.edit.value) && item.edit && !item.isComplex\" class=\"edit-input\">\n  <textarea [value]=\"item.value\" #valueInput\n            (keyup)=\"item.value = valueInput.value\"></textarea>\n</span>\n", styles: ["span{display:inline-block;word-break:break-all}.edit-input,.edit-input textarea{width:100%}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxJsonTableValueComponent, decorators: [{
            type: Component,
            args: [{ selector: '[ngx-json-table-value]', template: "<span *ngIf=\"(!item.isNew && !settings.options.edit.value) || !item.edit || item.isComplex\">{{item.value}}</span>\n<span *ngIf=\"(item.isNew || settings.options.edit.value) && item.edit && !item.isComplex\" class=\"edit-input\">\n  <textarea [value]=\"item.value\" #valueInput\n            (keyup)=\"item.value = valueInput.value\"></textarea>\n</span>\n", styles: ["span{display:inline-block;word-break:break-all}.edit-input,.edit-input textarea{width:100%}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { item: [{
                type: Input
            }], settings: [{
                type: Input
            }], onChange: [{
                type: Output
            }], onEscapeKeyListener: [{
                type: HostListener,
                args: ['keyup.escape']
            }], onEnterKeyListener: [{
                type: HostListener,
                args: ['keyup.enter']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWpzb24tdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3Rib2R5L3ZhbHVlL3ZhbHVlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1qc29uLXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy90Ym9keS92YWx1ZS92YWx1ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBVXJGLE1BQU0sT0FBTywwQkFBMEI7SUFNckM7UUFGVSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7SUFHdkQsQ0FBQztJQUdELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDekMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUdELGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFBRSxPQUFPO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDOytHQXpCVSwwQkFBMEI7bUdBQTFCLDBCQUEwQiwwUENWdkMsc1dBS0E7OzRGREthLDBCQUEwQjtrQkFMdEMsU0FBUzsrQkFDRSx3QkFBd0I7MEVBTXpCLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNJLFFBQVE7c0JBQWpCLE1BQU07Z0JBTVAsbUJBQW1CO3NCQURsQixZQUFZO3VCQUFDLGNBQWM7Z0JBVzVCLGtCQUFrQjtzQkFEakIsWUFBWTt1QkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSnNvblRyZWVOb2RlIH0gZnJvbSAnLi4vLi4vLi4vbGliL2pzb24tdHJlZS1ub2RlJztcbmltcG9ydCB7IEpzb25UcmVlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9saWIvaGVscGVycyc7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4uLy4uLy4uL2xpYi9zZXR0aW5ncyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuZ3gtanNvbi10YWJsZS12YWx1ZV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vdmFsdWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi92YWx1ZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neEpzb25UYWJsZVZhbHVlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBpdGVtOiBKc29uVHJlZU5vZGU7XG4gIEBJbnB1dCgpIHNldHRpbmdzOiBTZXR0aW5ncztcbiAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxKc29uVHJlZUV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAuZXNjYXBlJylcbiAgb25Fc2NhcGVLZXlMaXN0ZW5lcigpIHtcbiAgICB0aGlzLml0ZW0ucmVzZXRTdGF0ZSgpO1xuICAgIHRoaXMuaXRlbS5lZGl0ICYmIHRoaXMuaXRlbS50b2dnbGVFZGl0KCk7XG4gICAgaWYgKHRoaXMuaXRlbS5pc05ldykge1xuICAgICAgdGhpcy5pdGVtLmRlbGV0ZSgpO1xuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KCdjbGVhbicpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwLmVudGVyJylcbiAgb25FbnRlcktleUxpc3RlbmVyKCkge1xuICAgIGlmICh0aGlzLml0ZW0uY2hlY2tOb3RVbmlxdWVLZXkoKSkgcmV0dXJuO1xuICAgIHRoaXMuaXRlbS50b2dnbGVFZGl0KCk7XG4gICAgdGhpcy5pdGVtLnVwZGF0ZVN0YXRlKCk7XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KCdlZGl0Jyk7XG4gIH1cbn1cbiIsIjxzcGFuICpuZ0lmPVwiKCFpdGVtLmlzTmV3ICYmICFzZXR0aW5ncy5vcHRpb25zLmVkaXQudmFsdWUpIHx8ICFpdGVtLmVkaXQgfHwgaXRlbS5pc0NvbXBsZXhcIj57e2l0ZW0udmFsdWV9fTwvc3Bhbj5cbjxzcGFuICpuZ0lmPVwiKGl0ZW0uaXNOZXcgfHwgc2V0dGluZ3Mub3B0aW9ucy5lZGl0LnZhbHVlKSAmJiBpdGVtLmVkaXQgJiYgIWl0ZW0uaXNDb21wbGV4XCIgY2xhc3M9XCJlZGl0LWlucHV0XCI+XG4gIDx0ZXh0YXJlYSBbdmFsdWVdPVwiaXRlbS52YWx1ZVwiICN2YWx1ZUlucHV0XG4gICAgICAgICAgICAoa2V5dXApPVwiaXRlbS52YWx1ZSA9IHZhbHVlSW5wdXQudmFsdWVcIj48L3RleHRhcmVhPlxuPC9zcGFuPlxuIl19