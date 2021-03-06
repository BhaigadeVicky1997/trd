import { Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare type ISize = 'B' | 'KB' | 'MB' | 'GB';
export declare class FileUploadService {
    private renderer;
    private readonly extensions;
    private readonly sizeRegex;
    constructor(renderer: Renderer2);
    isFileDragDropAvailable(): boolean;
    parseSize(value: string | number): number;
    formatSize(size: number): string;
    private calculateSize;
    getFileType(file: File): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileUploadService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FileUploadService>;
}
//# sourceMappingURL=file-upload.service.d.ts.map