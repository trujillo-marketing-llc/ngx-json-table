import * as i0 from '@angular/core';
import { Pipe, EventEmitter, Component, Input, Output, HostListener, NgModule } from '@angular/core';
import { cloneDeep } from 'lodash';
import * as i1$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1 from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const iconsPackages = {
    basic: {
        notSorted: { html: '<span class="ngx-json-table-icon">&#8693;</span>' },
        sortedAsc: { html: '<span class="ngx-json-table-icon">&#10515;</span>' },
        sortedDesc: { html: '<span class="ngx-json-table-icon">&#10514;</span>' },
        expand: { html: '<span class="ngx-json-table-icon">&#8853;</span>' },
        collapse: { html: '<span class="ngx-json-table-icon">&#8854;</span>' },
        simpleChild: { html: '<span class="ngx-json-table-icon">&#62;</span>' },
        addChild: { html: '<span class="ngx-json-table-icon" style="color: green; cursor: pointer">&#8853;</span>' },
        editChild: { html: '<span class="ngx-json-table-icon" style="color: orange; cursor: pointer">&#10000;</span>' },
        confirmEditChild: { html: '<span class="ngx-json-table-icon" style="color: green; cursor: pointer">&#10162;</span>' },
        cancelEditChild: { html: '<span class="ngx-json-table-icon" style="color: indianred; cursor: pointer">&#8855;</span>' },
        deleteChild: { html: '<span class="ngx-json-table-icon" style="color: indianred; cursor: pointer">&#8861;</span>' },
        uploadFile: { html: `<span class="ngx-json-table-icon" style="cursor: pointer;"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-upload" class="svg-inline--fa fa-file-upload fa-w-12" role="img" viewBox="0 0 384 512"><path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm65.18 216.01H224v80c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36l96.42-95.7c6.65-6.61 17.39-6.61 24.04 0l96.42 95.7c10.15 10.07 3.03 27.36-11.25 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"/></svg></span>` },
    },
    'font-awesome': {
        notSorted: { class: 'fa fa-sort' },
        sortedAsc: { class: 'fa fa-sort-amount-asc' },
        sortedDesc: { class: 'fa fa-sort-amount-desc' },
        expand: { class: 'fa fa-plus-circle' },
        collapse: { class: 'fa fa-minus-circle' },
        simpleChild: { class: 'fa fa-angle-right' },
        addChild: {
            class: 'fa fa-plus-circle',
            color: 'green'
        },
        editChild: {
            class: 'fa fa-pencil',
            color: 'orange'
        },
        confirmEditChild: {
            class: 'fa fa-check-circle',
            color: 'green'
        },
        cancelEditChild: {
            class: 'fa fa-times-circle',
            color: 'indianred'
        },
        deleteChild: {
            class: 'fa fa-minus-circle',
            color: 'indianred'
        },
        uploadFile: { class: 'fa fa-upload' }
    },
    'material-design': {
        notSorted: {
            class: 'material-icons',
            innerText: 'swap_vert'
        },
        sortedAsc: {
            class: 'material-icons',
            innerText: 'trending_up'
        },
        sortedDesc: {
            class: 'material-icons',
            innerText: 'trending_down'
        },
        expand: {
            class: 'material-icons',
            innerText: 'control_point'
        },
        collapse: {
            class: 'material-icons',
            innerText: 'remove_circle_outline'
        },
        simpleChild: {
            class: 'material-icons',
            innerText: 'keyboard_arrow_right'
        },
        addChild: {
            class: 'material-icons',
            innerText: 'add_circle',
            color: 'green'
        },
        editChild: {
            class: 'material-icons',
            innerText: 'create',
            color: 'orange'
        },
        confirmEditChild: {
            class: 'material-icons',
            innerText: 'check_circle',
            color: 'green'
        },
        cancelEditChild: {
            class: 'material-icons',
            innerText: 'cancel',
            color: 'indianred'
        },
        deleteChild: {
            class: 'material-icons',
            innerText: 'remove_circle',
            color: 'indianred'
        },
        uploadFile: {
            class: 'material-icons',
            innerText: 'backup',
        }
    },
};

/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
// tslint:disable-next-line:only-arrow-functions
const deepExtend = function (...objects) {
    if (arguments.length < 1 || typeof arguments[0] !== 'object') {
        return false;
    }
    if (arguments.length < 2) {
        return arguments[0];
    }
    const target = arguments[0];
    // convert arguments to array and cut off target object
    const args = Array.prototype.slice.call(arguments, 1);
    let val;
    let src;
    args.forEach((obj) => {
        // skip argument if it is array or isn't object
        if (typeof obj !== 'object' || Array.isArray(obj)) {
            return;
        }
        Object.keys(obj).forEach((key) => {
            src = target[key]; // source value
            val = obj[key]; // new value
            // recursion prevention
            if (val === target) {
                return;
                /**
                 * if new value isn't object then just overwrite by new value
                 * instead of extending.
                 */
            }
            else if (typeof val !== 'object' || val === null) {
                target[key] = val;
                return;
                // just clone arrays (and recursive clone objects inside)
            }
            else if (Array.isArray(val)) {
                target[key] = cloneDeep(val);
                return;
                // overwrite by new value if source isn't object or array
            }
            else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
                target[key] = deepExtend({}, val);
                return;
                // source value and new value is objects both, extending...
            }
            else {
                target[key] = deepExtend(src, val);
                return;
            }
        });
    });
    return target;
};

class JsonTreeNode {
    constructor(key, value, type, level, isArray, parent, children, showChildren) {
        this.edit = false;
        this.showEditPanel = false;
        this.error = false;
        this.isNew = false;
        this.id = `${Math.random().toString(36).substr(2, 9)}`;
        this.key = this.prevKey = key;
        this.value = this.prevValue = value;
        this.type = type;
        this.level = level ?? 0;
        this.isArray = isArray ?? false;
        this.parent = parent;
        this.children = children ?? [];
        this.showChildren = showChildren ?? false;
    }
    toggleShowChildren(allLevels = false) {
        this.showChildren = !this.showChildren;
        if (allLevels) {
            const processAllLevels = (parent) => {
                for (const child of parent.children) {
                    child.showChildren = parent.showChildren;
                    processAllLevels(child);
                }
            };
            processAllLevels(this);
        }
    }
    checkNotUniqueKey() {
        return (this.key === '' || (this.parent
            && this.parent.children.filter(c => c.id !== this.id && c.key === this.key).length > 0))
            && (this.error = true)
            && (setTimeout(() => this.error = false, 2000) !== null);
    }
    toggleEdit() {
        this.edit = !this.edit;
    }
    addChild(child) {
        this.children.push(child);
    }
    canAppear() {
        return this.canAppearCheck(this);
    }
    canAppearCheck(child) {
        if (!child.parent)
            return true;
        return child.parent.showChildren && this.canAppearCheck(child.parent);
    }
    get isComplex() {
        return this.type === 'object';
    }
    isKeyEditable() {
        return !this.parent?.isArray;
    }
    resetState() {
        this.key = this.prevKey;
        this.value = this.prevValue;
    }
    updateState() {
        this.prevKey = this.key;
        this.prevValue = this.value;
    }
    delete() {
        const parentIndex = this.parent.children.findIndex((node) => node.id === this.id);
        this.parent.children.splice(parentIndex, 1);
        if (this.parent.isArray) {
            for (let i = parentIndex; i < this.parent.children.length; i++) {
                this.parent.children[i].key = `${parseInt(this.parent.children[i].key, 10) - 1}`;
            }
        }
    }
}

class SanitizeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SanitizeHtmlPipe, deps: [{ token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: SanitizeHtmlPipe, name: "sanitizeHtml" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SanitizeHtmlPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'sanitizeHtml'
                }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }]; } });

class NgxJsonTableKeyComponent {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: NgxJsonTableKeyComponent, selector: "[ngx-json-table-key]", inputs: { item: "item", settings: "settings", icons: "icons" }, outputs: { onChange: "onChange" }, host: { listeners: { "keyup.escape": "onEscapeKeyListener()", "keyup.enter": "onEnterKeyListener()" } }, ngImport: i0, template: "<span [style]=\"{'margin-left': 20 * item.level + 'px'}\">\n  <span *ngIf=\"!item.isComplex\"\n        [innerHTML]=\"icons.simpleChild.html | sanitizeHtml\"></span>\n  <span *ngIf=\"item.isComplex\"\n        [innerHTML]=\"icons[item.showChildren ? 'collapse' : 'expand'].html | sanitizeHtml\"></span>\n  <span *ngIf=\"(!item.isNew && !settings.options.edit.key) || !item.edit || !item.isKeyEditable()\"\n        [ngStyle]=\"{cursor: item.isComplex ? 'pointer' : ''}\"\n        (click)=\"item.isComplex && item.toggleShowChildren($event['ctrlKey'])\" class=\"row-key-value\">{{item.key}}\n    <span style=\"color: darkgray\" *ngIf=\"item.isComplex\">\n      {{(item.isArray ? '[' : '{') + item.children.length + (item.isArray ? ']' : '}')}}\n    </span>\n  </span>\n  <span *ngIf=\"(item.isNew || settings.options.edit.key) && item.edit && item.isKeyEditable()\">\n    <input [value]=\"item.key\" #keyInput\n           [ngStyle]=\"{'border-color': item.error ? 'red' : ''}\"\n           (keyup)=\"item.key = keyInput.value.trim()\"/>\n  </span>\n  <span *ngIf=\"!item.edit && item.showEditPanel\" class=\"float-right\">\n    <span *ngIf=\"item.isComplex && settings.options.add\" (click)=\"toggleDropdownMenu(dropdown)\"\n          [innerHTML]=\"icons.addChild.html | sanitizeHtml\"></span>\n    <span class=\"dropdown-content\" #dropdown>\n      <span (click)=\"addChild()\">Value</span><br>\n      <span (click)=\"addChild(true)\">Object</span><br>\n      <span (click)=\"addChild(true, true)\">Array</span>\n    </span>\n    <span *ngIf=\"settings.options.edit.key || settings.options.edit.value\"\n          (click)=\"((item.isKeyEditable() && settings.options.edit.key) || settings.options.edit.value) && item.toggleEdit()\"\n          [innerHTML]=\"icons.editChild.html | sanitizeHtml\"></span>\n    <span *ngIf=\"settings.options.delete\"\n          (click)=\"item.delete();onChange.emit('delete')\"\n          [innerHTML]=\"icons.deleteChild.html | sanitizeHtml\"></span>\n  </span>\n  <span *ngIf=\"item.edit\" class=\"float-right\">\n    <span (click)=\"onEnterKeyListener()\"\n          [innerHTML]=\"icons.confirmEditChild.html | sanitizeHtml\"></span>\n    <span (click)=\"onEscapeKeyListener()\"\n          [innerHTML]=\"icons.cancelEditChild.html | sanitizeHtml\"></span>\n  </span>\n</span>\n", styles: [".float-right{float:right}.row-key-value{display:inline-block;word-break:break-all}.dropdown-content{display:none;position:absolute;background-color:#f1f1f1;min-width:50px;padding:3px;box-shadow:0 8px 16px #0003;z-index:1}.dropdown-content span{margin:5px;width:100%}.dropdown-content span:hover{background-color:#ddd;cursor:pointer}\n"], dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "pipe", type: SanitizeHtmlPipe, name: "sanitizeHtml" }] }); }
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

class NgxJsonTableValueComponent {
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
        this.onChange.emit('edit');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxJsonTableValueComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: NgxJsonTableValueComponent, selector: "[ngx-json-table-value]", inputs: { item: "item", settings: "settings" }, outputs: { onChange: "onChange" }, host: { listeners: { "keyup.escape": "onEscapeKeyListener()", "keyup.enter": "onEnterKeyListener()" } }, ngImport: i0, template: "<span *ngIf=\"(!item.isNew && !settings.options.edit.value) || !item.edit || item.isComplex\">{{item.value}}</span>\n<span *ngIf=\"(item.isNew || settings.options.edit.value) && item.edit && !item.isComplex\" class=\"edit-input\">\n  <textarea [value]=\"item.value\" #valueInput\n            (keyup)=\"item.value = valueInput.value\"></textarea>\n</span>\n", styles: ["span{display:inline-block;word-break:break-all}.edit-input,.edit-input textarea{width:100%}\n"], dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxJsonTableValueComponent, decorators: [{
            type: Component,
            args: [{ selector: '[ngx-json-table-value]', template: "<span *ngIf=\"(!item.isNew && !settings.options.edit.value) || !item.edit || item.isComplex\">{{item.value}}</span>\n<span *ngIf=\"(item.isNew || settings.options.edit.value) && item.edit && !item.isComplex\" class=\"edit-input\">\n  <textarea [value]=\"item.value\" #valueInput\n            (keyup)=\"item.value = valueInput.value\"></textarea>\n</span>\n", styles: ["span{display:inline-block;word-break:break-all}.edit-input,.edit-input textarea{width:100%}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { item: [{
                type: Input
            }], settings: [{
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

class NgxJsonTableTrowComponent {
    constructor() {
        this.onChange = new EventEmitter();
    }
    onMouseEnterListener() {
        this.item.showEditPanel = true;
    }
    onMouseLeaveListener() {
        this.item.showEditPanel = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxJsonTableTrowComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: NgxJsonTableTrowComponent, selector: "[ngx-json-table-trow]", inputs: { item: "item", settings: "settings", icons: "icons" }, outputs: { onChange: "onChange" }, host: { listeners: { "mouseenter": "onMouseEnterListener()", "mouseleave": "onMouseLeaveListener()" } }, ngImport: i0, template: "<td ngx-json-table-key [style]=\"{width: settings.key.width}\"\n    [item]=\"item\"\n    [settings]=\"settings\"\n    [icons]=\"icons\"\n    (onChange)=\"onChange.emit($event)\">\n</td>\n<td ngx-json-table-value\n    [style]=\"{width: settings.value.width}\"\n    [item]=\"item\" class=\"row-value\"\n    [settings]=\"settings\"\n    (onChange)=\"onChange.emit($event)\">\n</td>\n", styles: [""], dependencies: [{ kind: "component", type: NgxJsonTableKeyComponent, selector: "[ngx-json-table-key]", inputs: ["item", "settings", "icons"], outputs: ["onChange"] }, { kind: "component", type: NgxJsonTableValueComponent, selector: "[ngx-json-table-value]", inputs: ["item", "settings"], outputs: ["onChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxJsonTableTrowComponent, decorators: [{
            type: Component,
            args: [{ selector: '[ngx-json-table-trow]', template: "<td ngx-json-table-key [style]=\"{width: settings.key.width}\"\n    [item]=\"item\"\n    [settings]=\"settings\"\n    [icons]=\"icons\"\n    (onChange)=\"onChange.emit($event)\">\n</td>\n<td ngx-json-table-value\n    [style]=\"{width: settings.value.width}\"\n    [item]=\"item\" class=\"row-value\"\n    [settings]=\"settings\"\n    (onChange)=\"onChange.emit($event)\">\n</td>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { item: [{
                type: Input
            }], settings: [{
                type: Input
            }], icons: [{
                type: Input
            }], onChange: [{
                type: Output
            }], onMouseEnterListener: [{
                type: HostListener,
                args: ['mouseenter']
            }], onMouseLeaveListener: [{
                type: HostListener,
                args: ['mouseleave']
            }] } });

class NgxJsonTableTbodyComponent {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: NgxJsonTableTbodyComponent, selector: "[ngx-json-table-tbody]", inputs: { data: "data", head: "head", settings: "settings", icons: "icons" }, outputs: { dataChange: "dataChange" }, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngFor=\"let item of table;\">\n  <tr ngx-json-table-trow\n      [item]=\"item\"\n      [settings]=\"settings\"\n      [icons]=\"icons\"\n      (onChange)=\"somethingChanged($event)\"\n      *ngIf=\"item.canAppear()\">\n  </tr>\n</ng-container>\n<tr *ngIf=\"!table || table.length === 0\">\n  <td colspan=\"2\">\n    No data Found\n  </td>\n</tr>\n", styles: [""], dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: NgxJsonTableTrowComponent, selector: "[ngx-json-table-trow]", inputs: ["item", "settings", "icons"], outputs: ["onChange"] }] }); }
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

class NgxJsonTableTheadComponent {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: NgxJsonTableTheadComponent, selector: "[ngx-json-table-thead]", inputs: { root: "root", settings: "settings", icons: "icons" }, outputs: { onChange: "onChange", fileLoaded: "fileLoaded", onSortDirectionChange: "onSortDirectionChange" }, ngImport: i0, template: "<tr>\n  <th [ngStyle]=\"{width: settings.key.width}\">\n    {{settings.key.headerText}}\n    <span class=\"float-right\" *ngIf=\"settings.sortable\"\n          (click)=\"toggleSortDirection()\" style=\"cursor: pointer; padding-left: 5px\">\n      <span *ngIf=\"!settings.sortDirection\" [innerHTML]=\"icons.notSorted.html | sanitizeHtml\">\n      </span>\n      <span *ngIf=\"settings.sortDirection\"\n            [innerHTML]=\"icons[settings.sortDirection === 'asc' ? 'sortedAsc' : 'sortedDesc'].html | sanitizeHtml\">\n      </span>\n    </span>\n    <span *ngIf=\"settings.options.add\" class=\"float-right\">\n      <span (click)=\"toggleDropdownMenu(dropdown)\"\n            [innerHTML]=\"icons.addChild.html | sanitizeHtml\"></span>\n      <span class=\"dropdown-content\" #dropdown>\n        <span (click)=\"addChild(dropdown)\">Value</span><br>\n        <span (click)=\"addChild(dropdown, true)\">Object</span><br>\n        <span (click)=\"addChild(dropdown, true, true)\">Array</span>\n      </span>\n    </span>\n  </th>\n  <th [ngStyle]=\"{width: settings.value.width}\">\n    {{settings.value.headerText}}\n    <label class=\"float-right\" for=\"upload\" style=\"margin-bottom: 0\">\n      <span *ngIf=\"settings.loadFromFile\"\n          [innerHTML]=\"icons.uploadFile.html | sanitizeHtml\"></span>\n      <input type=\"file\" id=\"upload\" style=\"display:none\"\n             (change)=\"loadFile($event)\" accept=\"application/json\">\n    </label>\n  </th>\n</tr>\n", styles: [".float-right{float:right!important}.dropdown-content{display:none;position:absolute;background-color:#f1f1f1;min-width:50px;padding:3px;box-shadow:0 8px 16px #0003;z-index:1}.dropdown-content span{margin:5px;width:100%}.dropdown-content span:hover{background-color:#ddd;cursor:pointer}\n"], dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "pipe", type: SanitizeHtmlPipe, name: "sanitizeHtml" }] }); }
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

class NgxJsonTableComponent {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: NgxJsonTableComponent, selector: "ngx-json-table", inputs: { data: "data", settings: "settings" }, outputs: { dataChange: "dataChange" }, usesOnChanges: true, ngImport: i0, template: "<table>\n  <thead ngx-json-table-thead #thead\n         [settings]=\"defaultSettings\"\n         [icons]=\"defaultSettings.icons\"\n         (onChange)=\"tbody.somethingChanged($event)\"\n         (fileLoaded)=\"data = $event\"\n         (onSortDirectionChange)=\"tbody.toggleSortDirection($event)\">\n  </thead>\n  <tbody ngx-json-table-tbody #tbody\n         [head]=\"thead\"\n         [data]=\"data\"\n         (dataChange)=\"dataChange.emit($event)\"\n         [settings]=\"defaultSettings\"\n         [icons]=\"defaultSettings.icons\">\n  </tbody>\n</table>\n", styles: [":host ::ng-deep table{width:100%;max-width:100%;overflow:auto}:host ::ng-deep table tr th{font-weight:700}:host ::ng-deep table tr td,:host ::ng-deep table tr th{margin:0;padding:.5em 1em}:host ::ng-deep .ngx-json-table-icon{cursor:pointer;font-size:18px;max-width:18px;max-height:18px;margin-left:3px;margin-right:5px}:host ::ng-deep .ngx-json-table-icon.material-icons,:host ::ng-deep .ngx-json-table-icon.fa{font-size:16px}\n"], dependencies: [{ kind: "component", type: NgxJsonTableTbodyComponent, selector: "[ngx-json-table-tbody]", inputs: ["data", "head", "settings", "icons"], outputs: ["dataChange"] }, { kind: "component", type: NgxJsonTableTheadComponent, selector: "[ngx-json-table-thead]", inputs: ["root", "settings", "icons"], outputs: ["onChange", "fileLoaded", "onSortDirectionChange"] }] }); }
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

const COMPONENTS = [
    NgxJsonTableTbodyComponent,
    NgxJsonTableTrowComponent,
    NgxJsonTableKeyComponent,
    NgxJsonTableValueComponent,
    NgxJsonTableTheadComponent,
    NgxJsonTableComponent,
    SanitizeHtmlPipe
];
class NgxJsonTableModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxJsonTableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: NgxJsonTableModule, declarations: [NgxJsonTableTbodyComponent,
            NgxJsonTableTrowComponent,
            NgxJsonTableKeyComponent,
            NgxJsonTableValueComponent,
            NgxJsonTableTheadComponent,
            NgxJsonTableComponent,
            SanitizeHtmlPipe], imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule], exports: [NgxJsonTableTbodyComponent,
            NgxJsonTableTrowComponent,
            NgxJsonTableKeyComponent,
            NgxJsonTableValueComponent,
            NgxJsonTableTheadComponent,
            NgxJsonTableComponent,
            SanitizeHtmlPipe] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxJsonTableModule, imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxJsonTableModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                    ],
                    declarations: [...COMPONENTS],
                    exports: [...COMPONENTS],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { NgxJsonTableComponent, NgxJsonTableKeyComponent, NgxJsonTableModule, NgxJsonTableTbodyComponent, NgxJsonTableTheadComponent, NgxJsonTableTrowComponent, NgxJsonTableValueComponent, SanitizeHtmlPipe, iconsPackages };
//# sourceMappingURL=ngx-json-table.mjs.map
