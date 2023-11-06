import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { JsonTreeNode } from '../../../lib/json-tree-node';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../pipes/sanitize-html.pipe";
export class NgxJsonTableKeyComponent {
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
        this.item.isNew = false;
        this.onChange.emit('edit');
    }
    addChild(isObject = false, isArray = false) {
        this.item.showChildren = true;
        const node = new JsonTreeNode(this.item.isArray ? '0' : '', '', isObject ? 'object' : 'string', this.item.level + 1, isArray, this.item);
        node.isNew = true;
        node.edit = true;
        if (this.item.isArray) {
            for (const child of this.item.children) {
                child.key = `${parseInt(child.key, 10) + 1}`;
            }
        }
        this.item.children.splice(0, 0, node);
        this.onChange.emit('add');
    }
    toggleDropdownMenu(dropdown) {
        const value = dropdown.style.display;
        dropdown.style.display = value === 'none' || value === '' ? 'block' : 'none';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxJsonTableKeyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: NgxJsonTableKeyComponent, selector: "[ngx-json-table-key]", inputs: { item: "item", settings: "settings", icons: "icons" }, outputs: { onChange: "onChange" }, host: { listeners: { "keyup.escape": "onEscapeKeyListener()", "keyup.enter": "onEnterKeyListener()" } }, ngImport: i0, template: "<span [style]=\"{'margin-left': 20 * item.level + 'px'}\">\n  <span *ngIf=\"!item.isComplex\"\n        [innerHTML]=\"icons.simpleChild.html | sanitizeHtml\"></span>\n  <span *ngIf=\"item.isComplex\"\n        [innerHTML]=\"icons[item.showChildren ? 'collapse' : 'expand'].html | sanitizeHtml\"></span>\n  <span *ngIf=\"(!item.isNew && !settings.options.edit.key) || !item.edit || !item.isKeyEditable()\"\n        [ngStyle]=\"{cursor: item.isComplex ? 'pointer' : ''}\"\n        (click)=\"item.isComplex && item.toggleShowChildren($event['ctrlKey'])\" class=\"row-key-value\">{{item.key}}\n    <span style=\"color: darkgray\" *ngIf=\"item.isComplex\">\n      {{(item.isArray ? '[' : '{') + item.children.length + (item.isArray ? ']' : '}')}}\n    </span>\n  </span>\n  <span *ngIf=\"(item.isNew || settings.options.edit.key) && item.edit && item.isKeyEditable()\">\n    <input [value]=\"item.key\" #keyInput\n           [ngStyle]=\"{'border-color': item.error ? 'red' : ''}\"\n           (keyup)=\"item.key = keyInput.value.trim()\"/>\n  </span>\n  <span *ngIf=\"!item.edit && item.showEditPanel\" class=\"float-right\">\n    <span *ngIf=\"item.isComplex && settings.options.add\" (click)=\"toggleDropdownMenu(dropdown)\"\n          [innerHTML]=\"icons.addChild.html | sanitizeHtml\"></span>\n    <span class=\"dropdown-content\" #dropdown>\n      <span (click)=\"addChild()\">Value</span><br>\n      <span (click)=\"addChild(true)\">Object</span><br>\n      <span (click)=\"addChild(true, true)\">Array</span>\n    </span>\n    <span *ngIf=\"settings.options.edit.key || settings.options.edit.value\"\n          (click)=\"((item.isKeyEditable() && settings.options.edit.key) || settings.options.edit.value) && item.toggleEdit()\"\n          [innerHTML]=\"icons.editChild.html | sanitizeHtml\"></span>\n    <span *ngIf=\"settings.options.delete\"\n          (click)=\"item.delete();onChange.emit('delete')\"\n          [innerHTML]=\"icons.deleteChild.html | sanitizeHtml\"></span>\n  </span>\n  <span *ngIf=\"item.edit\" class=\"float-right\">\n    <span (click)=\"onEnterKeyListener()\"\n          [innerHTML]=\"icons.confirmEditChild.html | sanitizeHtml\"></span>\n    <span (click)=\"onEscapeKeyListener()\"\n          [innerHTML]=\"icons.cancelEditChild.html | sanitizeHtml\"></span>\n  </span>\n</span>\n", styles: [".float-right{float:right}.row-key-value{display:inline-block;word-break:break-all}.dropdown-content{display:none;position:absolute;background-color:#f1f1f1;min-width:50px;padding:3px;box-shadow:0 8px 16px #0003;z-index:1}.dropdown-content span{margin:5px;width:100%}.dropdown-content span:hover{background-color:#ddd;cursor:pointer}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "pipe", type: i2.SanitizeHtmlPipe, name: "sanitizeHtml" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxJsonTableKeyComponent, decorators: [{
            type: Component,
            args: [{ selector: '[ngx-json-table-key]', template: "<span [style]=\"{'margin-left': 20 * item.level + 'px'}\">\n  <span *ngIf=\"!item.isComplex\"\n        [innerHTML]=\"icons.simpleChild.html | sanitizeHtml\"></span>\n  <span *ngIf=\"item.isComplex\"\n        [innerHTML]=\"icons[item.showChildren ? 'collapse' : 'expand'].html | sanitizeHtml\"></span>\n  <span *ngIf=\"(!item.isNew && !settings.options.edit.key) || !item.edit || !item.isKeyEditable()\"\n        [ngStyle]=\"{cursor: item.isComplex ? 'pointer' : ''}\"\n        (click)=\"item.isComplex && item.toggleShowChildren($event['ctrlKey'])\" class=\"row-key-value\">{{item.key}}\n    <span style=\"color: darkgray\" *ngIf=\"item.isComplex\">\n      {{(item.isArray ? '[' : '{') + item.children.length + (item.isArray ? ']' : '}')}}\n    </span>\n  </span>\n  <span *ngIf=\"(item.isNew || settings.options.edit.key) && item.edit && item.isKeyEditable()\">\n    <input [value]=\"item.key\" #keyInput\n           [ngStyle]=\"{'border-color': item.error ? 'red' : ''}\"\n           (keyup)=\"item.key = keyInput.value.trim()\"/>\n  </span>\n  <span *ngIf=\"!item.edit && item.showEditPanel\" class=\"float-right\">\n    <span *ngIf=\"item.isComplex && settings.options.add\" (click)=\"toggleDropdownMenu(dropdown)\"\n          [innerHTML]=\"icons.addChild.html | sanitizeHtml\"></span>\n    <span class=\"dropdown-content\" #dropdown>\n      <span (click)=\"addChild()\">Value</span><br>\n      <span (click)=\"addChild(true)\">Object</span><br>\n      <span (click)=\"addChild(true, true)\">Array</span>\n    </span>\n    <span *ngIf=\"settings.options.edit.key || settings.options.edit.value\"\n          (click)=\"((item.isKeyEditable() && settings.options.edit.key) || settings.options.edit.value) && item.toggleEdit()\"\n          [innerHTML]=\"icons.editChild.html | sanitizeHtml\"></span>\n    <span *ngIf=\"settings.options.delete\"\n          (click)=\"item.delete();onChange.emit('delete')\"\n          [innerHTML]=\"icons.deleteChild.html | sanitizeHtml\"></span>\n  </span>\n  <span *ngIf=\"item.edit\" class=\"float-right\">\n    <span (click)=\"onEnterKeyListener()\"\n          [innerHTML]=\"icons.confirmEditChild.html | sanitizeHtml\"></span>\n    <span (click)=\"onEscapeKeyListener()\"\n          [innerHTML]=\"icons.cancelEditChild.html | sanitizeHtml\"></span>\n  </span>\n</span>\n", styles: [".float-right{float:right}.row-key-value{display:inline-block;word-break:break-all}.dropdown-content{display:none;position:absolute;background-color:#f1f1f1;min-width:50px;padding:3px;box-shadow:0 8px 16px #0003;z-index:1}.dropdown-content span{margin:5px;width:100%}.dropdown-content span:hover{background-color:#ddd;cursor:pointer}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { item: [{
                type: Input
            }], settings: [{
                type: Input
            }], icons: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1qc29uLXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy90Ym9keS9rZXkva2V5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1qc29uLXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy90Ym9keS9rZXkva2V5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQVMzRCxNQUFNLE9BQU8sd0JBQXdCO0lBT25DO1FBRlUsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO0lBR3ZELENBQUM7SUFHRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3pDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFHRCxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQUUsT0FBTztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxRQUFRLENBQUMsV0FBb0IsS0FBSyxFQUFFLFVBQW1CLEtBQUs7UUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzlCLE1BQU0sSUFBSSxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQzVELFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNyQixLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUN0QyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7YUFDOUM7U0FDRjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxRQUF5QjtRQUMxQyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNyQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLEtBQUssTUFBTSxJQUFJLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQy9FLENBQUM7K0dBL0NVLHdCQUF3QjttR0FBeEIsd0JBQXdCLHdRQ1ZyQyxxd0VBdUNBOzs0RkQ3QmEsd0JBQXdCO2tCQUxwQyxTQUFTOytCQUNFLHNCQUFzQjswRUFNdkIsSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNJLFFBQVE7c0JBQWpCLE1BQU07Z0JBTVAsbUJBQW1CO3NCQURsQixZQUFZO3VCQUFDLGNBQWM7Z0JBVzVCLGtCQUFrQjtzQkFEakIsWUFBWTt1QkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSnNvblRyZWVOb2RlIH0gZnJvbSAnLi4vLi4vLi4vbGliL2pzb24tdHJlZS1ub2RlJztcbmltcG9ydCB7IEpzb25UcmVlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9saWIvaGVscGVycyc7XG5pbXBvcnQgeyBJY29ucywgU2V0dGluZ3MgfSBmcm9tICcuLi8uLi8uLi9saWIvc2V0dGluZ3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbmd4LWpzb24tdGFibGUta2V5XScsXG4gIHRlbXBsYXRlVXJsOiAnLi9rZXkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9rZXkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hKc29uVGFibGVLZXlDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGl0ZW06IEpzb25UcmVlTm9kZTtcbiAgQElucHV0KCkgc2V0dGluZ3M6IFNldHRpbmdzO1xuICBASW5wdXQoKSBpY29uczogSWNvbnM7XG4gIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8SnNvblRyZWVFdmVudD4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwLmVzY2FwZScpXG4gIG9uRXNjYXBlS2V5TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5pdGVtLnJlc2V0U3RhdGUoKTtcbiAgICB0aGlzLml0ZW0uZWRpdCAmJiB0aGlzLml0ZW0udG9nZ2xlRWRpdCgpO1xuICAgIGlmICh0aGlzLml0ZW0uaXNOZXcpIHtcbiAgICAgIHRoaXMuaXRlbS5kZWxldGUoKTtcbiAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCgnY2xlYW4nKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXl1cC5lbnRlcicpXG4gIG9uRW50ZXJLZXlMaXN0ZW5lcigpIHtcbiAgICBpZiAodGhpcy5pdGVtLmNoZWNrTm90VW5pcXVlS2V5KCkpIHJldHVybjtcbiAgICB0aGlzLml0ZW0udG9nZ2xlRWRpdCgpO1xuICAgIHRoaXMuaXRlbS51cGRhdGVTdGF0ZSgpO1xuICAgIHRoaXMuaXRlbS5pc05ldyA9IGZhbHNlO1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdCgnZWRpdCcpO1xuICB9XG5cbiAgYWRkQ2hpbGQoaXNPYmplY3Q6IGJvb2xlYW4gPSBmYWxzZSwgaXNBcnJheTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgdGhpcy5pdGVtLnNob3dDaGlsZHJlbiA9IHRydWU7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBKc29uVHJlZU5vZGUodGhpcy5pdGVtLmlzQXJyYXkgPyAnMCcgOiAnJywgJycsXG4gICAgICBpc09iamVjdCA/ICdvYmplY3QnIDogJ3N0cmluZycsIHRoaXMuaXRlbS5sZXZlbCArIDEsIGlzQXJyYXksIHRoaXMuaXRlbSk7XG4gICAgbm9kZS5pc05ldyA9IHRydWU7XG4gICAgbm9kZS5lZGl0ID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5pdGVtLmlzQXJyYXkpIHtcbiAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5pdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgIGNoaWxkLmtleSA9IGAke3BhcnNlSW50KGNoaWxkLmtleSwgMTApICsgMX1gO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLml0ZW0uY2hpbGRyZW4uc3BsaWNlKDAsIDAsIG5vZGUpO1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdCgnYWRkJyk7XG4gIH1cblxuICB0b2dnbGVEcm9wZG93bk1lbnUoZHJvcGRvd246IEhUTUxTcGFuRWxlbWVudCkge1xuICAgIGNvbnN0IHZhbHVlID0gZHJvcGRvd24uc3R5bGUuZGlzcGxheTtcbiAgICBkcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gdmFsdWUgPT09ICdub25lJyB8fCB2YWx1ZSA9PT0gJycgPyAnYmxvY2snIDogJ25vbmUnO1xuICB9XG59XG4iLCI8c3BhbiBbc3R5bGVdPVwieydtYXJnaW4tbGVmdCc6IDIwICogaXRlbS5sZXZlbCArICdweCd9XCI+XG4gIDxzcGFuICpuZ0lmPVwiIWl0ZW0uaXNDb21wbGV4XCJcbiAgICAgICAgW2lubmVySFRNTF09XCJpY29ucy5zaW1wbGVDaGlsZC5odG1sIHwgc2FuaXRpemVIdG1sXCI+PC9zcGFuPlxuICA8c3BhbiAqbmdJZj1cIml0ZW0uaXNDb21wbGV4XCJcbiAgICAgICAgW2lubmVySFRNTF09XCJpY29uc1tpdGVtLnNob3dDaGlsZHJlbiA/ICdjb2xsYXBzZScgOiAnZXhwYW5kJ10uaHRtbCB8IHNhbml0aXplSHRtbFwiPjwvc3Bhbj5cbiAgPHNwYW4gKm5nSWY9XCIoIWl0ZW0uaXNOZXcgJiYgIXNldHRpbmdzLm9wdGlvbnMuZWRpdC5rZXkpIHx8ICFpdGVtLmVkaXQgfHwgIWl0ZW0uaXNLZXlFZGl0YWJsZSgpXCJcbiAgICAgICAgW25nU3R5bGVdPVwie2N1cnNvcjogaXRlbS5pc0NvbXBsZXggPyAncG9pbnRlcicgOiAnJ31cIlxuICAgICAgICAoY2xpY2spPVwiaXRlbS5pc0NvbXBsZXggJiYgaXRlbS50b2dnbGVTaG93Q2hpbGRyZW4oJGV2ZW50WydjdHJsS2V5J10pXCIgY2xhc3M9XCJyb3cta2V5LXZhbHVlXCI+e3tpdGVtLmtleX19XG4gICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogZGFya2dyYXlcIiAqbmdJZj1cIml0ZW0uaXNDb21wbGV4XCI+XG4gICAgICB7eyhpdGVtLmlzQXJyYXkgPyAnWycgOiAneycpICsgaXRlbS5jaGlsZHJlbi5sZW5ndGggKyAoaXRlbS5pc0FycmF5ID8gJ10nIDogJ30nKX19XG4gICAgPC9zcGFuPlxuICA8L3NwYW4+XG4gIDxzcGFuICpuZ0lmPVwiKGl0ZW0uaXNOZXcgfHwgc2V0dGluZ3Mub3B0aW9ucy5lZGl0LmtleSkgJiYgaXRlbS5lZGl0ICYmIGl0ZW0uaXNLZXlFZGl0YWJsZSgpXCI+XG4gICAgPGlucHV0IFt2YWx1ZV09XCJpdGVtLmtleVwiICNrZXlJbnB1dFxuICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2JvcmRlci1jb2xvcic6IGl0ZW0uZXJyb3IgPyAncmVkJyA6ICcnfVwiXG4gICAgICAgICAgIChrZXl1cCk9XCJpdGVtLmtleSA9IGtleUlucHV0LnZhbHVlLnRyaW0oKVwiLz5cbiAgPC9zcGFuPlxuICA8c3BhbiAqbmdJZj1cIiFpdGVtLmVkaXQgJiYgaXRlbS5zaG93RWRpdFBhbmVsXCIgY2xhc3M9XCJmbG9hdC1yaWdodFwiPlxuICAgIDxzcGFuICpuZ0lmPVwiaXRlbS5pc0NvbXBsZXggJiYgc2V0dGluZ3Mub3B0aW9ucy5hZGRcIiAoY2xpY2spPVwidG9nZ2xlRHJvcGRvd25NZW51KGRyb3Bkb3duKVwiXG4gICAgICAgICAgW2lubmVySFRNTF09XCJpY29ucy5hZGRDaGlsZC5odG1sIHwgc2FuaXRpemVIdG1sXCI+PC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiICNkcm9wZG93bj5cbiAgICAgIDxzcGFuIChjbGljayk9XCJhZGRDaGlsZCgpXCI+VmFsdWU8L3NwYW4+PGJyPlxuICAgICAgPHNwYW4gKGNsaWNrKT1cImFkZENoaWxkKHRydWUpXCI+T2JqZWN0PC9zcGFuPjxicj5cbiAgICAgIDxzcGFuIChjbGljayk9XCJhZGRDaGlsZCh0cnVlLCB0cnVlKVwiPkFycmF5PC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cInNldHRpbmdzLm9wdGlvbnMuZWRpdC5rZXkgfHwgc2V0dGluZ3Mub3B0aW9ucy5lZGl0LnZhbHVlXCJcbiAgICAgICAgICAoY2xpY2spPVwiKChpdGVtLmlzS2V5RWRpdGFibGUoKSAmJiBzZXR0aW5ncy5vcHRpb25zLmVkaXQua2V5KSB8fCBzZXR0aW5ncy5vcHRpb25zLmVkaXQudmFsdWUpICYmIGl0ZW0udG9nZ2xlRWRpdCgpXCJcbiAgICAgICAgICBbaW5uZXJIVE1MXT1cImljb25zLmVkaXRDaGlsZC5odG1sIHwgc2FuaXRpemVIdG1sXCI+PC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwic2V0dGluZ3Mub3B0aW9ucy5kZWxldGVcIlxuICAgICAgICAgIChjbGljayk9XCJpdGVtLmRlbGV0ZSgpO29uQ2hhbmdlLmVtaXQoJ2RlbGV0ZScpXCJcbiAgICAgICAgICBbaW5uZXJIVE1MXT1cImljb25zLmRlbGV0ZUNoaWxkLmh0bWwgfCBzYW5pdGl6ZUh0bWxcIj48L3NwYW4+XG4gIDwvc3Bhbj5cbiAgPHNwYW4gKm5nSWY9XCJpdGVtLmVkaXRcIiBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+XG4gICAgPHNwYW4gKGNsaWNrKT1cIm9uRW50ZXJLZXlMaXN0ZW5lcigpXCJcbiAgICAgICAgICBbaW5uZXJIVE1MXT1cImljb25zLmNvbmZpcm1FZGl0Q2hpbGQuaHRtbCB8IHNhbml0aXplSHRtbFwiPjwvc3Bhbj5cbiAgICA8c3BhbiAoY2xpY2spPVwib25Fc2NhcGVLZXlMaXN0ZW5lcigpXCJcbiAgICAgICAgICBbaW5uZXJIVE1MXT1cImljb25zLmNhbmNlbEVkaXRDaGlsZC5odG1sIHwgc2FuaXRpemVIdG1sXCI+PC9zcGFuPlxuICA8L3NwYW4+XG48L3NwYW4+XG4iXX0=