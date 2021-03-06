import { SimpleChanges, OnChanges, AfterViewInit } from '@angular/core';
import { FileUploadComponent } from '../components/multiple-file-upload/file-upload.component';
import { SimpleFileUploadComponent } from '../components/simple-file-upload/simple-file-upload.component';
import * as i0 from "@angular/core";
export declare class FilesNativeDirective implements AfterViewInit, OnChanges {
    private nativeValue;
    set native(isNative: boolean | string);
    private readonly fileUpload;
    constructor(fileUpload: FileUploadComponent, simpleFileUpload: SimpleFileUploadComponent);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private enableNative;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilesNativeDirective, [{ optional: true; host: true; self: true; }, { optional: true; host: true; self: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FilesNativeDirective, "file-upload[native]", never, { "native": "native"; }, {}, never>;
}
//# sourceMappingURL=native.directive.d.ts.map