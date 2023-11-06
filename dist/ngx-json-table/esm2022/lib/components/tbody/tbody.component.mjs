import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JsonTreeNode } from '../../lib/json-tree-node';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./trow/trow.component";
export class NgxJsonTableTbodyComponent {
    constructor() {
        this.data = {};
        this.dataChange = new EventEmitter();
        this.currentData = {};
        this.jsonTree = new JsonTreeNode('root', '', 'object', -1, false, null, [], true);
        this.table = [];
    }
    ngOnChanges({ data, settings, icons }) {
        if (data && this.currentData !== this.data) {
            this.data = this.data ?? {};
            this.currentData = this.data;
            this.rebuildJsonTree();
            this.rebuildTable();
            !data.isFirstChange() && this.dataChange.next(this.data);
            this.head.root = this.jsonTree;
        }
    }
    rebuildJsonTree() {
        this.jsonTree.children = [];
        this.buildJsonTree(this.jsonTree, this.data);
        this.settings.sortDirection && this.sortJsonTree(this.jsonTree, this.settings.sortDirection);
    }
    rebuildTable() {
        this.table = [];
        this.buildTable(this.jsonTree);
    }
    buildJsonTree(root, object, level = 0) {
        root.isArray = Array.isArray(object);
        const keys = Object.keys(object);
        for (const key of keys) {
            const value = object[key];
            const node = new JsonTreeNode(key, typeof value !== 'object' ? value : '', value !== null ? typeof value : 'undefined', level, false, root, [], this.settings.expandAll);
            root.addChild(node);
            value !== null && typeof value === 'object' && this.buildJsonTree(node, value, level + 1);
        }
    }
    sortJsonTree(root, sortDirection = 'asc') {
        root.children.sort((a, b) => a.key.localeCompare(b.key));
        sortDirection === 'desc' && root.children.reverse();
        for (const node of root.children) {
            this.sortJsonTree(node, sortDirection);
        }
    }
    buildTable(root) {
        root.level > -1 && this.table.push(root);
        for (const node of root.children) {
            this.buildTable(node);
        }
    }
    jsonTreeToObject(root) {
        let result;
        if (root.isComplex) {
            result = root.isArray ? [] : {};
            for (const node of root.children) {
                result[node.key] = this.jsonTreeToObject(node);
            }
        }
        else {
            const value = `${root.value}`;
            if (`${parseFloat(value)}` === value) {
                result = parseFloat(value);
            }
            else if (['true', 'false'].includes(value.toLowerCase())) {
                result = value === 'true';
            }
            else {
                result = value;
            }
        }
        return result;
    }
    toggleSortDirection(sortDirection) {
        this.sortJsonTree(this.jsonTree, sortDirection);
        this.somethingChanged('sort');
    }
    somethingChanged(event) {
        switch (event) {
            case 'add':
                this.rebuildTable();
                this.currentData = this.jsonTreeToObject(this.jsonTree);
                break;
            case 'sort':
            case 'delete':
                this.rebuildTable();
                this.currentData = this.jsonTreeToObject(this.jsonTree);
                this.dataChange.next(this.currentData);
                break;
            case 'edit':
                this.currentData = this.jsonTreeToObject(this.jsonTree);
                this.dataChange.next(this.currentData);
                break;
            case 'clean':
                this.rebuildTable();
                break;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxJsonTableTbodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: NgxJsonTableTbodyComponent, selector: "[ngx-json-table-tbody]", inputs: { data: "data", head: "head", settings: "settings", icons: "icons" }, outputs: { dataChange: "dataChange" }, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngFor=\"let item of table;\">\n  <tr ngx-json-table-trow\n      [item]=\"item\"\n      [settings]=\"settings\"\n      [icons]=\"icons\"\n      (onChange)=\"somethingChanged($event)\"\n      *ngIf=\"item.canAppear()\">\n  </tr>\n</ng-container>\n<tr *ngIf=\"!table || table.length === 0\">\n  <td colspan=\"2\">\n    No data Found\n  </td>\n</tr>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NgxJsonTableTrowComponent, selector: "[ngx-json-table-trow]", inputs: ["item", "settings", "icons"], outputs: ["onChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxJsonTableTbodyComponent, decorators: [{
            type: Component,
            args: [{ selector: '[ngx-json-table-tbody]', template: "<ng-container *ngFor=\"let item of table;\">\n  <tr ngx-json-table-trow\n      [item]=\"item\"\n      [settings]=\"settings\"\n      [icons]=\"icons\"\n      (onChange)=\"somethingChanged($event)\"\n      *ngIf=\"item.canAppear()\">\n  </tr>\n</ng-container>\n<tr *ngIf=\"!table || table.length === 0\">\n  <td colspan=\"2\">\n    No data Found\n  </td>\n</tr>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { data: [{
                type: Input
            }], head: [{
                type: Input
            }], settings: [{
                type: Input
            }], icons: [{
                type: Input
            }], dataChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWpzb24tdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3Rib2R5L3Rib2R5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1qc29uLXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy90Ym9keS90Ym9keS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNqRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFVeEQsTUFBTSxPQUFPLDBCQUEwQjtJQVlyQztRQVZTLFNBQUksR0FBYyxFQUFFLENBQUM7UUFJcEIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFL0MsZ0JBQVcsR0FBYyxFQUFFLENBQUM7UUFDNUIsYUFBUSxHQUFpQixJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRixVQUFLLEdBQW1CLEVBQUUsQ0FBQztJQUczQixDQUFDO0lBRUQsV0FBVyxDQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQWdCO1FBQ2hELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTtZQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxF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QUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN4RCxNQUFNO1lBQ1IsS0FBSyxNQUFNLENBQUM7WUFDWixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDdkMsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDdkMsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3BCLE1BQU07U0FDVDtJQUNILENBQUM7K0dBN0dVLDBCQUEwQjttR0FBMUIsMEJBQTBCLHdNQ1h2Qyw0V0FjQTs7NEZESGEsMEJBQTBCO2tCQUx0QyxTQUFTOytCQUNFLHdCQUF3QjswRUFNekIsSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDSSxVQUFVO3NCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSnNvblRyZWVOb2RlIH0gZnJvbSAnLi4vLi4vbGliL2pzb24tdHJlZS1ub2RlJztcbmltcG9ydCB7IEljb25zLCBTZXR0aW5ncywgU29ydFR5cGUgfSBmcm9tICcuLi8uLi9saWIvc2V0dGluZ3MnO1xuaW1wb3J0IHsgSnNvblRyZWVFdmVudCwgSnNvblZhbHVlIH0gZnJvbSAnLi4vLi4vbGliL2hlbHBlcnMnO1xuaW1wb3J0IHsgTmd4SnNvblRhYmxlVGhlYWRDb21wb25lbnQgfSBmcm9tICcuLi90aGVhZC90aGVhZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbmd4LWpzb24tdGFibGUtdGJvZHldJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rib2R5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGJvZHkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hKc29uVGFibGVUYm9keUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgZGF0YTogSnNvblZhbHVlID0ge307XG4gIEBJbnB1dCgpIGhlYWQ6IE5neEpzb25UYWJsZVRoZWFkQ29tcG9uZW50O1xuICBASW5wdXQoKSBzZXR0aW5nczogU2V0dGluZ3M7XG4gIEBJbnB1dCgpIGljb25zOiBJY29ucztcbiAgQE91dHB1dCgpIGRhdGFDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjdXJyZW50RGF0YTogSnNvblZhbHVlID0ge307XG4gIGpzb25UcmVlOiBKc29uVHJlZU5vZGUgPSBuZXcgSnNvblRyZWVOb2RlKCdyb290JywgJycsICdvYmplY3QnLCAtMSwgZmFsc2UsIG51bGwsIFtdLCB0cnVlKTtcbiAgdGFibGU6IEpzb25UcmVlTm9kZVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyh7ZGF0YSwgc2V0dGluZ3MsIGljb25zfTogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChkYXRhICYmIHRoaXMuY3VycmVudERhdGEgIT09IHRoaXMuZGF0YSkge1xuICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhID8/IHt9O1xuICAgICAgdGhpcy5jdXJyZW50RGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgIHRoaXMucmVidWlsZEpzb25UcmVlKCk7XG4gICAgICB0aGlzLnJlYnVpbGRUYWJsZSgpO1xuICAgICAgIWRhdGEuaXNGaXJzdENoYW5nZSgpICYmIHRoaXMuZGF0YUNoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gICAgICB0aGlzLmhlYWQucm9vdCA9IHRoaXMuanNvblRyZWU7XG4gICAgfVxuICB9XG5cbiAgcmVidWlsZEpzb25UcmVlKCkge1xuICAgIHRoaXMuanNvblRyZWUuY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLmJ1aWxkSnNvblRyZWUodGhpcy5qc29uVHJlZSwgdGhpcy5kYXRhKTtcbiAgICB0aGlzLnNldHRpbmdzLnNvcnREaXJlY3Rpb24gJiYgdGhpcy5zb3J0SnNvblRyZWUodGhpcy5qc29uVHJlZSwgdGhpcy5zZXR0aW5ncy5zb3J0RGlyZWN0aW9uKTtcbiAgfVxuXG4gIHJlYnVpbGRUYWJsZSgpIHtcbiAgICB0aGlzLnRhYmxlID0gW107XG4gICAgdGhpcy5idWlsZFRhYmxlKHRoaXMuanNvblRyZWUpO1xuICB9XG5cbiAgYnVpbGRKc29uVHJlZShyb290OiBKc29uVHJlZU5vZGUsIG9iamVjdDogSnNvblZhbHVlLCBsZXZlbDogbnVtYmVyID0gMCkge1xuICAgIHJvb3QuaXNBcnJheSA9IEFycmF5LmlzQXJyYXkob2JqZWN0KTtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG9iamVjdFtrZXldO1xuICAgICAgY29uc3Qgbm9kZSA9IG5ldyBKc29uVHJlZU5vZGUoa2V5LCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnID8gdmFsdWUgOiAnJyxcbiAgICAgICAgdmFsdWUgIT09IG51bGwgPyB0eXBlb2YgdmFsdWUgOiAndW5kZWZpbmVkJywgbGV2ZWwsIGZhbHNlLCByb290LCBbXSwgdGhpcy5zZXR0aW5ncy5leHBhbmRBbGwpO1xuICAgICAgcm9vdC5hZGRDaGlsZChub2RlKTtcbiAgICAgIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdGhpcy5idWlsZEpzb25UcmVlKG5vZGUsIHZhbHVlLCBsZXZlbCArIDEpO1xuICAgIH1cbiAgfVxuXG4gIHNvcnRKc29uVHJlZShyb290OiBKc29uVHJlZU5vZGUsIHNvcnREaXJlY3Rpb246IFNvcnRUeXBlID0gJ2FzYycpIHtcbiAgICByb290LmNoaWxkcmVuLnNvcnQoKGEsIGIpID0+IGEua2V5LmxvY2FsZUNvbXBhcmUoYi5rZXkpKTtcbiAgICBzb3J0RGlyZWN0aW9uID09PSAnZGVzYycgJiYgcm9vdC5jaGlsZHJlbi5yZXZlcnNlKCk7XG4gICAgZm9yIChjb25zdCBub2RlIG9mIHJvb3QuY2hpbGRyZW4pIHtcbiAgICAgIHRoaXMuc29ydEpzb25UcmVlKG5vZGUsIHNvcnREaXJlY3Rpb24pO1xuICAgIH1cbiAgfVxuXG4gIGJ1aWxkVGFibGUocm9vdDogSnNvblRyZWVOb2RlKSB7XG4gICAgcm9vdC5sZXZlbCA+IC0xICYmIHRoaXMudGFibGUucHVzaChyb290KTtcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygcm9vdC5jaGlsZHJlbikge1xuICAgICAgdGhpcy5idWlsZFRhYmxlKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGpzb25UcmVlVG9PYmplY3Qocm9vdDogSnNvblRyZWVOb2RlKTogSnNvblZhbHVlIHtcbiAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgaWYgKHJvb3QuaXNDb21wbGV4KSB7XG4gICAgICByZXN1bHQgPSByb290LmlzQXJyYXkgPyBbXSA6IHt9O1xuICAgICAgZm9yIChjb25zdCBub2RlIG9mIHJvb3QuY2hpbGRyZW4pIHtcbiAgICAgICAgcmVzdWx0W25vZGUua2V5XSA9IHRoaXMuanNvblRyZWVUb09iamVjdChub2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsdWUgPSBgJHtyb290LnZhbHVlfWA7XG4gICAgICBpZiAoYCR7cGFyc2VGbG9hdCh2YWx1ZSl9YCA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmVzdWx0ID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKFsndHJ1ZScsICdmYWxzZSddLmluY2x1ZGVzKHZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgIHJlc3VsdCA9IHZhbHVlID09PSAndHJ1ZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHRvZ2dsZVNvcnREaXJlY3Rpb24oc29ydERpcmVjdGlvbikge1xuICAgIHRoaXMuc29ydEpzb25UcmVlKHRoaXMuanNvblRyZWUsIHNvcnREaXJlY3Rpb24pO1xuICAgIHRoaXMuc29tZXRoaW5nQ2hhbmdlZCgnc29ydCcpO1xuICB9XG5cbiAgc29tZXRoaW5nQ2hhbmdlZChldmVudDogSnNvblRyZWVFdmVudCkge1xuICAgIHN3aXRjaCAoZXZlbnQpIHtcbiAgICAgIGNhc2UgJ2FkZCc6XG4gICAgICAgIHRoaXMucmVidWlsZFRhYmxlKCk7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGEgPSB0aGlzLmpzb25UcmVlVG9PYmplY3QodGhpcy5qc29uVHJlZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc29ydCc6XG4gICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICB0aGlzLnJlYnVpbGRUYWJsZSgpO1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRhID0gdGhpcy5qc29uVHJlZVRvT2JqZWN0KHRoaXMuanNvblRyZWUpO1xuICAgICAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dCh0aGlzLmN1cnJlbnREYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0YSA9IHRoaXMuanNvblRyZWVUb09iamVjdCh0aGlzLmpzb25UcmVlKTtcbiAgICAgICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQodGhpcy5jdXJyZW50RGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xlYW4nOlxuICAgICAgICB0aGlzLnJlYnVpbGRUYWJsZSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdGFibGU7XCI+XG4gIDx0ciBuZ3gtanNvbi10YWJsZS10cm93XG4gICAgICBbaXRlbV09XCJpdGVtXCJcbiAgICAgIFtzZXR0aW5nc109XCJzZXR0aW5nc1wiXG4gICAgICBbaWNvbnNdPVwiaWNvbnNcIlxuICAgICAgKG9uQ2hhbmdlKT1cInNvbWV0aGluZ0NoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAqbmdJZj1cIml0ZW0uY2FuQXBwZWFyKClcIj5cbiAgPC90cj5cbjwvbmctY29udGFpbmVyPlxuPHRyICpuZ0lmPVwiIXRhYmxlIHx8IHRhYmxlLmxlbmd0aCA9PT0gMFwiPlxuICA8dGQgY29sc3Bhbj1cIjJcIj5cbiAgICBObyBkYXRhIEZvdW5kXG4gIDwvdGQ+XG48L3RyPlxuIl19