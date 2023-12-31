import { PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class SanitizeHtmlPipe implements PipeTransform {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(html: string): unknown;
    static ɵfac: i0.ɵɵFactoryDeclaration<SanitizeHtmlPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SanitizeHtmlPipe, "sanitizeHtml", false>;
}
