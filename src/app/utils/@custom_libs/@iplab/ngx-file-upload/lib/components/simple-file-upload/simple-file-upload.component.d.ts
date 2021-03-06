import { ElementRef, Renderer2, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { FileUploadControl } from './../../helpers/control.class';
import { FileUploadService } from './../../services/file-upload.service';
import { FileUploadAbstract } from './../file-upload-abstract.component';
import * as i0 from "@angular/core";
export declare class SimpleFileUploadComponent extends FileUploadAbstract implements ControlValueAccessor {
    fileUploadService: FileUploadService;
    control: FileUploadControl;
    buttonRef: TemplateRef<any>;
    placeholderRef: TemplateRef<any>;
    input: ElementRef<HTMLInputElement>;
    label: ElementRef<HTMLLabelElement>;
    protected isMultiple: boolean | string;
    constructor(fileUploadService: FileUploadService, hostElementRef: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef);
    get hasFiles(): boolean;
    get isInvalid(): boolean;
    onInputChange(event: Event): void;
    /**
     * model -> view changes
     */
    writeValue(files: any): void;
    /**
     * register function which will be called on UI change
     * to update view -> model
     */
    registerOnChange(fn: (v: Array<File>) => void): void;
    private onTouch;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    onKeyDown(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SimpleFileUploadComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SimpleFileUploadComponent, "file-upload[simple]", never, { "control": "control"; }, {}, ["buttonRef", "placeholderRef"], never>;
}
//# sourceMappingURL=simple-file-upload.component.d.ts.map