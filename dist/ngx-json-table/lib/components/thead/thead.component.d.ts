import { EventEmitter } from '@angular/core';
import { Icons, Settings, SortType } from '../../lib/settings';
import { JsonTreeNode } from '../../lib/json-tree-node';
import { JsonTreeEvent } from '../../lib/helpers';
import * as i0 from "@angular/core";
export declare class NgxJsonTableTheadComponent {
    root: JsonTreeNode;
    settings: Settings;
    icons: Icons;
    onChange: EventEmitter<JsonTreeEvent>;
    fileLoaded: EventEmitter<any>;
    onSortDirectionChange: EventEmitter<SortType>;
    constructor();
    toggleSortDirection(): void;
    toggleDropdownMenu(dropdown: HTMLSpanElement): void;
    addChild(dropdown: HTMLSpanElement, isObject?: boolean, isArray?: boolean): void;
    loadFile(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxJsonTableTheadComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxJsonTableTheadComponent, "[ngx-json-table-thead]", never, { "root": { "alias": "root"; "required": false; }; "settings": { "alias": "settings"; "required": false; }; "icons": { "alias": "icons"; "required": false; }; }, { "onChange": "onChange"; "fileLoaded": "fileLoaded"; "onSortDirectionChange": "onSortDirectionChange"; }, never, never, false, never>;
}
