import { SimpleChanges, OnChanges, AfterViewInit } from '@angular/core';
import { FileUploadComponent } from '../components/multiple-file-upload/file-upload.component';
import { SimpleFileUploadComponent } from '../components/simple-file-upload/simple-file-upload.component';
import * as i0 from "@angular/core";
export declare class FilesDiscardDirective implements AfterViewInit, OnChanges {
    private discardValue;
    set discard(discard: boolean | string);
    private readonly fileUpload;
    constructor(fileUpload: FileUploadComponent, simpleFileUpload: SimpleFileUploadComponent);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private setAccept;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilesDiscardDirective, [{ optional: true; host: true; self: true; }, { optional: true; host: true; self: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FilesDiscardDirective, "file-upload[discard]", never, { "discard": "discard"; }, {}, never>;
}
//# sourceMappingURL=discard.directive.d.ts.map