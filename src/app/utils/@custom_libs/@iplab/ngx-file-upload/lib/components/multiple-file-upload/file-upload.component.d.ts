import { ElementRef, Renderer2, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { AnimationEvent } from '@angular/animations';
import { FileUploadControl } from './../../helpers/control.class';
import { FileUploadService } from './../../services/file-upload.service';
import { FileUploadAbstract } from './../file-upload-abstract.component';
import * as i0 from "@angular/core";
export declare const DRAGOVER = "dragover";
export declare const TOUCHED = "ng-touched";
export declare class FileUploadComponent extends FileUploadAbstract implements ControlValueAccessor {
    fileUploadService: FileUploadService;
    private document;
    control: FileUploadControl;
    animation: boolean | string;
    set multiple(isMultiple: boolean | string);
    templateRef: TemplateRef<any>;
    listItem: TemplateRef<any>;
    input: ElementRef<HTMLInputElement>;
    label: ElementRef<HTMLLabelElement>;
    templateContext: {
        $implicit: boolean;
        isFileDragDropAvailable: boolean;
    };
    /** animation fields */
    zoomText: 'zoomOut' | 'zoomIn' | 'static';
    listVisible: boolean;
    constructor(fileUploadService: FileUploadService, hostElementRef: ElementRef, renderer: Renderer2, document: any, cdr: ChangeDetectorRef);
    get hasFiles(): boolean;
    get isInvalid(): boolean;
    get isAnimationDisabled(): boolean;
    trackByFn(index: number, item: File): string;
    protected setEvents(): void;
    onKeyDown(event: KeyboardEvent): void;
    private preventDragEvents;
    private renderView;
    private showList;
    private hideList;
    private toggleListVisibility;
    /**
     * on file over add class name
     */
    private onDragOver;
    /**
     * on mouse out remove class name
     */
    private onDragLeave;
    onDrop(event: Event): void;
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
    zoomAnimationDone(event: AnimationEvent): void;
    animationListFinished(event: AnimationEvent): void;
    static ??fac: i0.????FactoryDeclaration<FileUploadComponent, never>;
    static ??cmp: i0.????ComponentDeclaration<FileUploadComponent, "file-upload:not([simple])", never, { "control": "control"; "animation": "animation"; "multiple": "multiple"; }, {}, ["templateRef", "listItem"], never>;
}
//# sourceMappingURL=file-upload.component.d.ts.map