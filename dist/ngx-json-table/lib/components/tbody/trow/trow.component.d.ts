import { EventEmitter } from '@angular/core';
import { JsonTreeNode } from '../../../lib/json-tree-node';
import { JsonTreeEvent } from '../../../lib/helpers';
import { Icons, Settings } from '../../../lib/settings';
import * as i0 from "@angular/core";
export declare class NgxJsonTableTrowComponent {
    item: JsonTreeNode;
    settings: Settings;
    icons: Icons;
    onChange: EventEmitter<JsonTreeEvent>;
    constructor();
    onMouseEnterListener(): void;
    onMouseLeaveListener(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxJsonTableTrowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxJsonTableTrowComponent, "[ngx-json-table-trow]", never, { "item": { "alias": "item"; "required": false; }; "settings": { "alias": "settings"; "required": false; }; "icons": { "alias": "icons"; "required": false; }; }, { "onChange": "onChange"; }, never, never, false, never>;
}
