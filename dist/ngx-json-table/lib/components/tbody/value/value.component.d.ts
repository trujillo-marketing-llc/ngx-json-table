import { EventEmitter } from '@angular/core';
import { JsonTreeNode } from '../../../lib/json-tree-node';
import { JsonTreeEvent } from '../../../lib/helpers';
import { Settings } from '../../../lib/settings';
import * as i0 from "@angular/core";
export declare class NgxJsonTableValueComponent {
    item: JsonTreeNode;
    settings: Settings;
    onChange: EventEmitter<JsonTreeEvent>;
    constructor();
    onEscapeKeyListener(): void;
    onEnterKeyListener(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxJsonTableValueComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxJsonTableValueComponent, "[ngx-json-table-value]", never, { "item": { "alias": "item"; "required": false; }; "settings": { "alias": "settings"; "required": false; }; }, { "onChange": "onChange"; }, never, never, false, never>;
}
