import { FileUploadControl } from './../helpers/control.class';
import { ElementRef, OnDestroy, Renderer2, ChangeDetectorRef, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare abstract class FileUploadAbstract implements OnInit, OnDestroy {
    protected readonly hostElementRef: ElementRef;
    protected readonly renderer: Renderer2;
    protected readonly cdr: ChangeDetectorRef;
    control: FileUploadControl;
    abstract input: ElementRef<HTMLInputElement>;
    abstract label: ElementRef<HTMLLabelElement>;
    protected isMultiple: boolean | string;
    protected readonly hooks: Array<Function>;
    protected readonly subscriptions: Array<Subscription>;
    protected onChange: (v: Array<File>) => void;
    constructor(hostElementRef: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected setEvents(): void;
    protected clearInputEl(): void;
    protected checkAndSetMultiple(): void;
    private triggerEvent;
    private updateAcceptAttr;
    private checkAndMarkAsDisabled;
    private toggleMultiple;
    /**
     * ControlValueAccessor implementation
     */
    private connectToForm;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileUploadAbstract, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FileUploadAbstract, never, never, {}, {}, never>;
}
//# sourceMappingURL=file-upload-abstract.component.d.ts.map