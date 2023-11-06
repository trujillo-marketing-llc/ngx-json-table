import { Component, EventEmitter, Input, Output } from '@angular/core';
import { iconsPackages } from './lib/settings';
import { deepExtend } from './lib/helpers';
import * as i0 from "@angular/core";
import * as i1 from "./components/tbody/tbody.component";
import * as i2 from "./components/thead/thead.component";
export class NgxJsonTableComponent {
    constructor() {
        this.dataChange = new EventEmitter();
        this.defaultSettings = {
            key: {
                headerText: 'Key',
                width: '40%',
            },
            value: {
                headerText: 'Value',
                width: '60%'
            },
            options: {
                add: false,
                edit: {
                    key: false,
                    value: false
                },
                delete: false
            },
            sortable: false,
            sortDirection: undefined,
            expandAll: false,
            loadFromFile: false
        };
        this.defaultSettings.icons = iconsPackages.basic;
        this.buildIcons(this.defaultSettings.icons);
    }
    ngOnChanges(changes) {
        if (changes.settings) {
            this.defaultSettings.icons = iconsPackages[this.settings?.iconPackage ?? 'basic'];
            this.defaultSettings = deepExtend({}, this.defaultSettings, this.settings);
            this.buildIcons(this.defaultSettings.icons);
        }
    }
    buildIcons(icons) {
        for (const [, value] of Object.entries(icons)) {
            value.class = value.class ?? '';
            value.innerText = value.innerText ?? '';
            value.color = value.color ?? 'inherit';
            value.html = value.html ?? `<i class="ngx-json-table-icon ${value.class}" style="color: ${value.color}">${value.innerText}</i>`;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxJsonTableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: NgxJsonTableComponent, selector: "ngx-json-table", inputs: { data: "data", settings: "settings" }, outputs: { dataChange: "dataChange" }, usesOnChanges: true, ngImport: i0, template: "<table>\n  <thead ngx-json-table-thead #thead\n         [settings]=\"defaultSettings\"\n         [icons]=\"defaultSettings.icons\"\n         (onChange)=\"tbody.somethingChanged($event)\"\n         (fileLoaded)=\"data = $event\"\n         (onSortDirectionChange)=\"tbody.toggleSortDirection($event)\">\n  </thead>\n  <tbody ngx-json-table-tbody #tbody\n         [head]=\"thead\"\n         [data]=\"data\"\n         (dataChange)=\"dataChange.emit($event)\"\n         [settings]=\"defaultSettings\"\n         [icons]=\"defaultSettings.icons\">\n  </tbody>\n</table>\n", styles: [":host ::ng-deep table{width:100%;max-width:100%;overflow:auto}:host ::ng-deep table tr th{font-weight:700}:host ::ng-deep table tr td,:host ::ng-deep table tr th{margin:0;padding:.5em 1em}:host ::ng-deep .ngx-json-table-icon{cursor:pointer;font-size:18px;max-width:18px;max-height:18px;margin-left:3px;margin-right:5px}:host ::ng-deep .ngx-json-table-icon.material-icons,:host ::ng-deep .ngx-json-table-icon.fa{font-size:16px}\n"], dependencies: [{ kind: "component", type: i1.NgxJsonTableTbodyComponent, selector: "[ngx-json-table-tbody]", inputs: ["data", "head", "settings", "icons"], outputs: ["dataChange"] }, { kind: "component", type: i2.NgxJsonTableTheadComponent, selector: "[ngx-json-table-thead]", inputs: ["root", "settings", "icons"], outputs: ["onChange", "fileLoaded", "onSortDirectionChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxJsonTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-json-table', template: "<table>\n  <thead ngx-json-table-thead #thead\n         [settings]=\"defaultSettings\"\n         [icons]=\"defaultSettings.icons\"\n         (onChange)=\"tbody.somethingChanged($event)\"\n         (fileLoaded)=\"data = $event\"\n         (onSortDirectionChange)=\"tbody.toggleSortDirection($event)\">\n  </thead>\n  <tbody ngx-json-table-tbody #tbody\n         [head]=\"thead\"\n         [data]=\"data\"\n         (dataChange)=\"dataChange.emit($event)\"\n         [settings]=\"defaultSettings\"\n         [icons]=\"defaultSettings.icons\">\n  </tbody>\n</table>\n", styles: [":host ::ng-deep table{width:100%;max-width:100%;overflow:auto}:host ::ng-deep table tr th{font-weight:700}:host ::ng-deep table tr td,:host ::ng-deep table tr th{margin:0;padding:.5em 1em}:host ::ng-deep .ngx-json-table-icon{cursor:pointer;font-size:18px;max-width:18px;max-height:18px;margin-left:3px;margin-right:5px}:host ::ng-deep .ngx-json-table-icon.material-icons,:host ::ng-deep .ngx-json-table-icon.fa{font-size:16px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { data: [{
                type: Input
            }], settings: [{
                type: Input
            }], dataChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWpzb24tdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWpzb24tdGFibGUvc3JjL2xpYi9uZ3gtanNvbi10YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtanNvbi10YWJsZS9zcmMvbGliL25neC1qc29uLXRhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBUyxhQUFhLEVBQVksTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBTzNDLE1BQU0sT0FBTyxxQkFBcUI7SUE2QmhDO1FBekJVLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRS9DLG9CQUFlLEdBQWE7WUFDMUIsR0FBRyxFQUFFO2dCQUNILFVBQVUsRUFBRSxLQUFLO2dCQUNqQixLQUFLLEVBQUUsS0FBSzthQUNiO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLFVBQVUsRUFBRSxPQUFPO2dCQUNuQixLQUFLLEVBQUUsS0FBSzthQUNiO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLEdBQUcsRUFBRSxLQUFLO2dCQUNWLElBQUksRUFBRTtvQkFDSixHQUFHLEVBQUUsS0FBSztvQkFDVixLQUFLLEVBQUUsS0FBSztpQkFDYjtnQkFDRCxNQUFNLEVBQUUsS0FBSzthQUNkO1lBQ0QsUUFBUSxFQUFFLEtBQUs7WUFDZixhQUFhLEVBQUUsU0FBUztZQUN4QixTQUFTLEVBQUUsS0FBSztZQUNoQixZQUFZLEVBQUUsS0FBSztTQUNwQixDQUFDO1FBR0EsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUNqRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsV0FBVyxJQUFJLE9BQU8sQ0FBQyxDQUFDO1lBQ2xGLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBYyxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQVk7UUFDckIsS0FBSyxNQUFNLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDaEMsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztZQUN4QyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDO1lBQ3ZDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxpQ0FBaUMsS0FBSyxDQUFDLEtBQUssbUJBQW1CLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLFNBQVMsTUFBTSxDQUFDO1NBQ2pJO0lBQ0gsQ0FBQzsrR0FqRFUscUJBQXFCO21HQUFyQixxQkFBcUIsa0tDVGxDLHNqQkFnQkE7OzRGRFBhLHFCQUFxQjtrQkFMakMsU0FBUzsrQkFDRSxnQkFBZ0I7MEVBTWpCLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNJLFVBQVU7c0JBQW5CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29ucywgaWNvbnNQYWNrYWdlcywgU2V0dGluZ3MgfSBmcm9tICcuL2xpYi9zZXR0aW5ncyc7XG5pbXBvcnQgeyBkZWVwRXh0ZW5kIH0gZnJvbSAnLi9saWIvaGVscGVycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1qc29uLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1qc29uLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LWpzb24tdGFibGUuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4SnNvblRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgpIHNldHRpbmdzOiBTZXR0aW5ncztcbiAgQE91dHB1dCgpIGRhdGFDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBkZWZhdWx0U2V0dGluZ3M6IFNldHRpbmdzID0ge1xuICAgIGtleToge1xuICAgICAgaGVhZGVyVGV4dDogJ0tleScsXG4gICAgICB3aWR0aDogJzQwJScsXG4gICAgfSxcbiAgICB2YWx1ZToge1xuICAgICAgaGVhZGVyVGV4dDogJ1ZhbHVlJyxcbiAgICAgIHdpZHRoOiAnNjAlJ1xuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgYWRkOiBmYWxzZSxcbiAgICAgIGVkaXQ6IHtcbiAgICAgICAga2V5OiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuICAgICAgZGVsZXRlOiBmYWxzZVxuICAgIH0sXG4gICAgc29ydGFibGU6IGZhbHNlLFxuICAgIHNvcnREaXJlY3Rpb246IHVuZGVmaW5lZCxcbiAgICBleHBhbmRBbGw6IGZhbHNlLFxuICAgIGxvYWRGcm9tRmlsZTogZmFsc2VcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRlZmF1bHRTZXR0aW5ncy5pY29ucyA9IGljb25zUGFja2FnZXMuYmFzaWM7XG4gICAgdGhpcy5idWlsZEljb25zKHRoaXMuZGVmYXVsdFNldHRpbmdzLmljb25zKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5zZXR0aW5ncykge1xuICAgICAgdGhpcy5kZWZhdWx0U2V0dGluZ3MuaWNvbnMgPSBpY29uc1BhY2thZ2VzW3RoaXMuc2V0dGluZ3M/Lmljb25QYWNrYWdlID8/ICdiYXNpYyddO1xuICAgICAgdGhpcy5kZWZhdWx0U2V0dGluZ3MgPSBkZWVwRXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRTZXR0aW5ncywgdGhpcy5zZXR0aW5ncyk7XG4gICAgICB0aGlzLmJ1aWxkSWNvbnModGhpcy5kZWZhdWx0U2V0dGluZ3MuaWNvbnMgYXMgSWNvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGJ1aWxkSWNvbnMoaWNvbnM6IEljb25zKSB7XG4gICAgZm9yIChjb25zdCBbLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoaWNvbnMpKSB7XG4gICAgICB2YWx1ZS5jbGFzcyA9IHZhbHVlLmNsYXNzID8/ICcnO1xuICAgICAgdmFsdWUuaW5uZXJUZXh0ID0gdmFsdWUuaW5uZXJUZXh0ID8/ICcnO1xuICAgICAgdmFsdWUuY29sb3IgPSB2YWx1ZS5jb2xvciA/PyAnaW5oZXJpdCc7XG4gICAgICB2YWx1ZS5odG1sID0gdmFsdWUuaHRtbCA/PyBgPGkgY2xhc3M9XCJuZ3gtanNvbi10YWJsZS1pY29uICR7dmFsdWUuY2xhc3N9XCIgc3R5bGU9XCJjb2xvcjogJHt2YWx1ZS5jb2xvcn1cIj4ke3ZhbHVlLmlubmVyVGV4dH08L2k+YDtcbiAgICB9XG4gIH1cbn1cbiIsIjx0YWJsZT5cbiAgPHRoZWFkIG5neC1qc29uLXRhYmxlLXRoZWFkICN0aGVhZFxuICAgICAgICAgW3NldHRpbmdzXT1cImRlZmF1bHRTZXR0aW5nc1wiXG4gICAgICAgICBbaWNvbnNdPVwiZGVmYXVsdFNldHRpbmdzLmljb25zXCJcbiAgICAgICAgIChvbkNoYW5nZSk9XCJ0Ym9keS5zb21ldGhpbmdDaGFuZ2VkKCRldmVudClcIlxuICAgICAgICAgKGZpbGVMb2FkZWQpPVwiZGF0YSA9ICRldmVudFwiXG4gICAgICAgICAob25Tb3J0RGlyZWN0aW9uQ2hhbmdlKT1cInRib2R5LnRvZ2dsZVNvcnREaXJlY3Rpb24oJGV2ZW50KVwiPlxuICA8L3RoZWFkPlxuICA8dGJvZHkgbmd4LWpzb24tdGFibGUtdGJvZHkgI3Rib2R5XG4gICAgICAgICBbaGVhZF09XCJ0aGVhZFwiXG4gICAgICAgICBbZGF0YV09XCJkYXRhXCJcbiAgICAgICAgIChkYXRhQ2hhbmdlKT1cImRhdGFDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgIFtzZXR0aW5nc109XCJkZWZhdWx0U2V0dGluZ3NcIlxuICAgICAgICAgW2ljb25zXT1cImRlZmF1bHRTZXR0aW5ncy5pY29uc1wiPlxuICA8L3Rib2R5PlxuPC90YWJsZT5cbiJdfQ==