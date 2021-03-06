import { FileUploadControl } from '../../helpers/control.class';
import { FileUploadService } from '../../services/file-upload.service';
import * as i0 from "@angular/core";
export declare class FileUploadListItemComponent {
    private fileUploadService;
    index: number;
    file: File;
    control: FileUploadControl;
    src: string;
    constructor(fileUploadService: FileUploadService);
    removeFile(file: File): void;
    calculateSize(size: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileUploadListItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileUploadListItemComponent, "file-upload-list-item", never, { "index": "index"; "file": "file"; "control": "control"; "src": "src" }, {}, never, ["*"]>;
}
//# sourceMappingURL=file-upload-list-item.component.d.ts.map