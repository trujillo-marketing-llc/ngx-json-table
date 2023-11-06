import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JsonTreeNode } from '../../lib/json-tree-node';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../pipes/sanitize-html.pipe";
export class NgxJsonTableTheadComponent {
    constructor() {
        this.onChange = new EventEmitter();
        this.fileLoaded = new EventEmitter();
        this.onSortDirectionChange = new EventEmitter();
    }
    toggleSortDirection() {
        this.settings.sortDirection = this.settings.sortDirection === 'asc' ? 'desc' : 'asc';
        this.onSortDirectionChange.emit(this.settings.sortDirection);
    }
    toggleDropdownMenu(dropdown) {
        const value = dropdown.style.display;
        dropdown.style.display = value === 'none' || value === '' ? 'block' : 'none';
    }
    addChild(dropdown, isObject = false, isArray = false) {
        dropdown.style.display = 'none';
        const node = new JsonTreeNode('', '', isObject ? 'object' : 'string', 0, isArray, this.root);
        node.edit = true;
        node.isNew = true;
        this.root.children.splice(0, 0, node);
        this.onChange.emit('add');
    }
    loadFile(event) {
        const [file] = event.target.files;
        if (file && file.type === 'application/json') {
            const fileReader = new FileReader();
            fileReader.readAsText(file);
            fileReader.onload = () => {
                const object = JSON.parse(fileReader.result);
                this.fileLoaded.emit(object);
            };
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxJsonTableTheadComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: NgxJsonTableTheadComponent, selector: "[ngx-json-table-thead]", inputs: { root: "root", settings: "settings", icons: "icons" }, outputs: { onChange: "onChange", fileLoaded: "fileLoaded", onSortDirectionChange: "onSortDirectionChange" }, ngImport: i0, template: "<tr>\n  <th [ngStyle]=\"{width: settings.key.width}\">\n    {{settings.key.headerText}}\n    <span class=\"float-right\" *ngIf=\"settings.sortable\"\n          (click)=\"toggleSortDirection()\" style=\"cursor: pointer; padding-left: 5px\">\n      <span *ngIf=\"!settings.sortDirection\" [innerHTML]=\"icons.notSorted.html | sanitizeHtml\">\n      </span>\n      <span *ngIf=\"settings.sortDirection\"\n            [innerHTML]=\"icons[settings.sortDirection === 'asc' ? 'sortedAsc' : 'sortedDesc'].html | sanitizeHtml\">\n      </span>\n    </span>\n    <span *ngIf=\"settings.options.add\" class=\"float-right\">\n      <span (click)=\"toggleDropdownMenu(dropdown)\"\n            [innerHTML]=\"icons.addChild.html | sanitizeHtml\"></span>\n      <span class=\"dropdown-content\" #dropdown>\n        <span (click)=\"addChild(dropdown)\">Value</span><br>\n        <span (click)=\"addChild(dropdown, true)\">Object</span><br>\n        <span (click)=\"addChild(dropdown, true, true)\">Array</span>\n      </span>\n    </span>\n  </th>\n  <th [ngStyle]=\"{width: settings.value.width}\">\n    {{settings.value.headerText}}\n    <label class=\"float-right\" for=\"upload\" style=\"margin-bottom: 0\">\n      <span *ngIf=\"settings.loadFromFile\"\n          [innerHTML]=\"icons.uploadFile.html | sanitizeHtml\"></span>\n      <input type=\"file\" id=\"upload\" style=\"display:none\"\n             (change)=\"loadFile($event)\" accept=\"application/json\">\n    </label>\n  </th>\n</tr>\n", styles: [".float-right{float:right!important}.dropdown-content{display:none;position:absolute;background-color:#f1f1f1;min-width:50px;padding:3px;box-shadow:0 8px 16px #0003;z-index:1}.dropdown-content span{margin:5px;width:100%}.dropdown-content span:hover{background-color:#ddd;cursor:pointer}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "pipe", type: i2.SanitizeHtmlPipe, name: "sanitizeHtml" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxJsonTableTheadComponent, decorators: [{
            type: Component,
            args: [{ selector: '[ngx-json-table-thead]', template: "<tr>\n  <th [ngStyle]=\"{width: settings.key.width}\">\n    {{settings.key.headerText}}\n    <span class=\"float-right\" *ngIf=\"settings.sortable\"\n          (click)=\"toggleSortDirection()\" style=\"cursor: pointer; padding-left: 5px\">\n      <span *ngIf=\"!settings.sortDirection\" [innerHTML]=\"icons.notSorted.html | sanitizeHtml\">\n      </span>\n      <span *ngIf=\"settings.sortDirection\"\n            [innerHTML]=\"icons[settings.sortDirection === 'asc' ? 'sortedAsc' : 'sortedDesc'].html | sanitizeHtml\">\n      </span>\n    </span>\n    <span *ngIf=\"settings.options.add\" class=\"float-right\">\n      <span (click)=\"toggleDropdownMenu(dropdown)\"\n            [innerHTML]=\"icons.addChild.html | sanitizeHtml\"></span>\n      <span class=\"dropdown-content\" #dropdown>\n        <span (click)=\"addChild(dropdown)\">Value</span><br>\n        <span (click)=\"addChild(dropdown, true)\">Object</span><br>\n        <span (click)=\"addChild(dropdown, true, true)\">Array</span>\n      </span>\n    </span>\n  </th>\n  <th [ngStyle]=\"{width: settings.value.width}\">\n    {{settings.value.headerText}}\n    <label class=\"float-right\" for=\"upload\" style=\"margin-bottom: 0\">\n      <span *ngIf=\"settings.loadFromFile\"\n          [innerHTML]=\"icons.uploadFile.html | sanitizeHtml\"></span>\n      <input type=\"file\" id=\"upload\" style=\"display:none\"\n             (change)=\"loadFile($event)\" accept=\"application/json\">\n    </label>\n  </th>\n</tr>\n", styles: [".float-right{float:right!important}.dropdown-content{display:none;position:absolute;background-color:#f1f1f1;min-width:50px;padding:3px;box-shadow:0 8px 16px #0003;z-index:1}.dropdown-content span{margin:5px;width:100%}.dropdown-content span:hover{background-color:#ddd;cursor:pointer}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { root: [{
                type: Input
            }], settings: [{
                type: Input
            }], icons: [{
                type: Input
            }], onChange: [{
                type: Output
            }], fileLoaded: [{
                type: Output
            }], onSortDirectionChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWpzb24tdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3RoZWFkL3RoZWFkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1qc29uLXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy90aGVhZC90aGVhZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQVF4RCxNQUFNLE9BQU8sMEJBQTBCO0lBU3JDO1FBSlUsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQzdDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3JDLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7SUFHL0QsQ0FBQztJQUVELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsa0JBQWtCLENBQUMsUUFBeUI7UUFDMUMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDckMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxLQUFLLE1BQU0sSUFBSSxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUMvRSxDQUFDO0lBRUQsUUFBUSxDQUFDLFFBQXlCLEVBQUUsV0FBb0IsS0FBSyxFQUFFLFVBQW1CLEtBQUs7UUFDckYsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ2hDLE1BQU0sSUFBSSxHQUFHLElBQUksWUFBWSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQUs7UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDbEMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxrQkFBa0IsRUFBRTtZQUM1QyxNQUFNLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQ3BDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsVUFBVSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7Z0JBQ3ZCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQWdCLENBQUMsQ0FBQztnQkFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDO1NBQ0g7SUFDSCxDQUFDOytHQXpDVSwwQkFBMEI7bUdBQTFCLDBCQUEwQiwyT0NWdkMsMjhDQStCQTs7NEZEckJhLDBCQUEwQjtrQkFMdEMsU0FBUzsrQkFDRSx3QkFBd0I7MEVBTXpCLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDSSxRQUFRO3NCQUFqQixNQUFNO2dCQUNHLFVBQVU7c0JBQW5CLE1BQU07Z0JBQ0cscUJBQXFCO3NCQUE5QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25zLCBTZXR0aW5ncywgU29ydFR5cGUgfSBmcm9tICcuLi8uLi9saWIvc2V0dGluZ3MnO1xuaW1wb3J0IHsgSnNvblRyZWVOb2RlIH0gZnJvbSAnLi4vLi4vbGliL2pzb24tdHJlZS1ub2RlJztcbmltcG9ydCB7IEpzb25UcmVlRXZlbnQgfSBmcm9tICcuLi8uLi9saWIvaGVscGVycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuZ3gtanNvbi10YWJsZS10aGVhZF0nLFxuICB0ZW1wbGF0ZVVybDogJy4vdGhlYWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90aGVhZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neEpzb25UYWJsZVRoZWFkQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSByb290OiBKc29uVHJlZU5vZGU7XG4gIEBJbnB1dCgpIHNldHRpbmdzOiBTZXR0aW5ncztcbiAgQElucHV0KCkgaWNvbnM6IEljb25zO1xuICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEpzb25UcmVlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBmaWxlTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvblNvcnREaXJlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNvcnRUeXBlPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgdG9nZ2xlU29ydERpcmVjdGlvbigpIHtcbiAgICB0aGlzLnNldHRpbmdzLnNvcnREaXJlY3Rpb24gPSB0aGlzLnNldHRpbmdzLnNvcnREaXJlY3Rpb24gPT09ICdhc2MnID8gJ2Rlc2MnIDogJ2FzYyc7XG4gICAgdGhpcy5vblNvcnREaXJlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNldHRpbmdzLnNvcnREaXJlY3Rpb24pO1xuICB9XG5cbiAgdG9nZ2xlRHJvcGRvd25NZW51KGRyb3Bkb3duOiBIVE1MU3BhbkVsZW1lbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGRyb3Bkb3duLnN0eWxlLmRpc3BsYXk7XG4gICAgZHJvcGRvd24uc3R5bGUuZGlzcGxheSA9IHZhbHVlID09PSAnbm9uZScgfHwgdmFsdWUgPT09ICcnID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgfVxuXG4gIGFkZENoaWxkKGRyb3Bkb3duOiBIVE1MU3BhbkVsZW1lbnQsIGlzT2JqZWN0OiBib29sZWFuID0gZmFsc2UsIGlzQXJyYXk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGRyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBKc29uVHJlZU5vZGUoJycsICcnLCBpc09iamVjdCA/ICdvYmplY3QnIDogJ3N0cmluZycsIDAsIGlzQXJyYXksIHRoaXMucm9vdCk7XG4gICAgbm9kZS5lZGl0ID0gdHJ1ZTtcbiAgICBub2RlLmlzTmV3ID0gdHJ1ZTtcbiAgICB0aGlzLnJvb3QuY2hpbGRyZW4uc3BsaWNlKDAsIDAsIG5vZGUpO1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdCgnYWRkJyk7XG4gIH1cblxuICBsb2FkRmlsZShldmVudCkge1xuICAgIGNvbnN0IFtmaWxlXSA9IGV2ZW50LnRhcmdldC5maWxlcztcbiAgICBpZiAoZmlsZSAmJiBmaWxlLnR5cGUgPT09ICdhcHBsaWNhdGlvbi9qc29uJykge1xuICAgICAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICBmaWxlUmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG4gICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gSlNPTi5wYXJzZShmaWxlUmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcpO1xuICAgICAgICB0aGlzLmZpbGVMb2FkZWQuZW1pdChvYmplY3QpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cbiIsIjx0cj5cbiAgPHRoIFtuZ1N0eWxlXT1cInt3aWR0aDogc2V0dGluZ3Mua2V5LndpZHRofVwiPlxuICAgIHt7c2V0dGluZ3Mua2V5LmhlYWRlclRleHR9fVxuICAgIDxzcGFuIGNsYXNzPVwiZmxvYXQtcmlnaHRcIiAqbmdJZj1cInNldHRpbmdzLnNvcnRhYmxlXCJcbiAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlU29ydERpcmVjdGlvbigpXCIgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7IHBhZGRpbmctbGVmdDogNXB4XCI+XG4gICAgICA8c3BhbiAqbmdJZj1cIiFzZXR0aW5ncy5zb3J0RGlyZWN0aW9uXCIgW2lubmVySFRNTF09XCJpY29ucy5ub3RTb3J0ZWQuaHRtbCB8IHNhbml0aXplSHRtbFwiPlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gKm5nSWY9XCJzZXR0aW5ncy5zb3J0RGlyZWN0aW9uXCJcbiAgICAgICAgICAgIFtpbm5lckhUTUxdPVwiaWNvbnNbc2V0dGluZ3Muc29ydERpcmVjdGlvbiA9PT0gJ2FzYycgPyAnc29ydGVkQXNjJyA6ICdzb3J0ZWREZXNjJ10uaHRtbCB8IHNhbml0aXplSHRtbFwiPlxuICAgICAgPC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cInNldHRpbmdzLm9wdGlvbnMuYWRkXCIgY2xhc3M9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgPHNwYW4gKGNsaWNrKT1cInRvZ2dsZURyb3Bkb3duTWVudShkcm9wZG93bilcIlxuICAgICAgICAgICAgW2lubmVySFRNTF09XCJpY29ucy5hZGRDaGlsZC5odG1sIHwgc2FuaXRpemVIdG1sXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCIgI2Ryb3Bkb3duPlxuICAgICAgICA8c3BhbiAoY2xpY2spPVwiYWRkQ2hpbGQoZHJvcGRvd24pXCI+VmFsdWU8L3NwYW4+PGJyPlxuICAgICAgICA8c3BhbiAoY2xpY2spPVwiYWRkQ2hpbGQoZHJvcGRvd24sIHRydWUpXCI+T2JqZWN0PC9zcGFuPjxicj5cbiAgICAgICAgPHNwYW4gKGNsaWNrKT1cImFkZENoaWxkKGRyb3Bkb3duLCB0cnVlLCB0cnVlKVwiPkFycmF5PC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgPC90aD5cbiAgPHRoIFtuZ1N0eWxlXT1cInt3aWR0aDogc2V0dGluZ3MudmFsdWUud2lkdGh9XCI+XG4gICAge3tzZXR0aW5ncy52YWx1ZS5oZWFkZXJUZXh0fX1cbiAgICA8bGFiZWwgY2xhc3M9XCJmbG9hdC1yaWdodFwiIGZvcj1cInVwbG9hZFwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMFwiPlxuICAgICAgPHNwYW4gKm5nSWY9XCJzZXR0aW5ncy5sb2FkRnJvbUZpbGVcIlxuICAgICAgICAgIFtpbm5lckhUTUxdPVwiaWNvbnMudXBsb2FkRmlsZS5odG1sIHwgc2FuaXRpemVIdG1sXCI+PC9zcGFuPlxuICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJ1cGxvYWRcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiXG4gICAgICAgICAgICAgKGNoYW5nZSk9XCJsb2FkRmlsZSgkZXZlbnQpXCIgYWNjZXB0PVwiYXBwbGljYXRpb24vanNvblwiPlxuICAgIDwvbGFiZWw+XG4gIDwvdGg+XG48L3RyPlxuIl19