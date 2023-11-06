import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { JsonTreeNode } from '../../lib/json-tree-node';
import { Icons, Settings, SortType } from '../../lib/settings';
import { JsonTreeEvent, JsonValue } from '../../lib/helpers';
import { NgxJsonTableTheadComponent } from '../thead/thead.component';
import * as i0 from "@angular/core";
export declare class NgxJsonTableTbodyComponent implements OnChanges {
    data: JsonValue;
    head: NgxJsonTableTheadComponent;
    settings: Settings;
    icons: Icons;
    dataChange: EventEmitter<any>;
    currentData: JsonValue;
    jsonTree: JsonTreeNode;
    table: JsonTreeNode[];
    constructor();
    ngOnChanges({ data, settings, icons }: SimpleChanges): void;
    rebuildJsonTree(): void;
    rebuildTable(): void;
    buildJsonTree(root: JsonTreeNode, object: JsonValue, level?: number): void;
    sortJsonTree(root: JsonTreeNode, sortDirection?: SortType): void;
    buildTable(root: JsonTreeNode): void;
    jsonTreeToObject(root: JsonTreeNode): JsonValue;
    toggleSortDirection(sortDirection: any): void;
    somethingChanged(event: JsonTreeEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxJsonTableTbodyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxJsonTableTbodyComponent, "[ngx-json-table-tbody]", never, { "data": { "alias": "data"; "required": false; }; "head": { "alias": "head"; "required": false; }; "settings": { "alias": "settings"; "required": false; }; "icons": { "alias": "icons"; "required": false; }; }, { "dataChange": "dataChange"; }, never, never, false, never>;
}
