import { EventEmitter } from '@angular/core';
import { JsonTreeNode } from '../../../lib/json-tree-node';
import { JsonTreeEvent } from '../../../lib/helpers';
import { Icons, Settings } from '../../../lib/settings';
import * as i0 from "@angular/core";
export declare class NgxJsonTableKeyComponent {
    item: JsonTreeNode;
    settings: Settings;
    icons: Icons;
    onChange: EventEmitter<JsonTreeEvent>;
    constructor();
    onEscapeKeyListener(): void;
    onEnterKeyListener(): void;
    addChild(isObject?: boolean, isArray?: boolean): void;
    toggleDropdownMenu(dropdown: HTMLSpanElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxJsonTableKeyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxJsonTableKeyComponent, "[ngx-json-table-key]", never, { "item": { "alias": "item"; "required": false; }; "settings": { "alias": "settings"; "required": false; }; "icons": { "alias": "icons"; "required": false; }; }, { "onChange": "onChange"; }, never, never, false, never>;
}
