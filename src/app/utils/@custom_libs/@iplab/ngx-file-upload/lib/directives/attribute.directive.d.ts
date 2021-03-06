import { SimpleChanges, OnChanges, AfterViewInit } from '@angular/core';
import { FileUploadComponent } from '../components/multiple-file-upload/file-upload.component';
import { SimpleFileUploadComponent } from '../components/simple-file-upload/simple-file-upload.component';
import * as i0 from "@angular/core";
export declare class FilesAcceptDirective implements AfterViewInit, OnChanges {
    accept: string;
    private readonly fileUpload;
    constructor(fileUpload: FileUploadComponent, simpleFileUpload: SimpleFileUploadComponent);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private setAccept;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilesAcceptDirective, [{ optional: true; host: true; self: true; }, { optional: true; host: true; self: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FilesAcceptDirective, "file-upload[accept]", never, { "accept": "accept"; }, {}, never>;
}
//# sourceMappingURL=attribute.directive.d.ts.map