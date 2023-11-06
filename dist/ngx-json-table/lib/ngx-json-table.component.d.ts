import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Icons, Settings } from './lib/settings';
import * as i0 from "@angular/core";
export declare class NgxJsonTableComponent implements OnChanges {
    data: any;
    settings: Settings;
    dataChange: EventEmitter<any>;
    defaultSettings: Settings;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    buildIcons(icons: Icons): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxJsonTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxJsonTableComponent, "ngx-json-table", never, { "data": { "alias": "data"; "required": false; }; "settings": { "alias": "settings"; "required": false; }; }, { "dataChange": "dataChange"; }, never, never, false, never>;
}
