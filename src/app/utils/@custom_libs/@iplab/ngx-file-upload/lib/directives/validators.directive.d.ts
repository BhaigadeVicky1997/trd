import { OnChanges, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
import { ValidationErrors } from './../helpers/validators.class';
import { FileUploadService } from './../services/file-upload.service';
import * as i0 from "@angular/core";
/**
 * A Directive that adds the `filesize` validator to controls marked with the
 * `filesize` attribute. The size of the file is in bytes or any other unit
 *
 * ### Example
 *
 * ```
 * <file-upload name="files" ngModel filesize="830000"></file-upload>
 * <file-upload name="files" ngModel [filesize]="830000"></file-upload>
 * <file-upload name="files" ngModel minSize="0" max="6200"></file-upload>
 * <file-upload name="files" ngModel filesize="123MB"></file-upload>
 * <file-upload name="files" ngModel [filesize]="12 mb"></file-upload>
 * <file-upload name="files" ngModel minSize="0" max="324KB"></file-upload>
 * ```
 *
 */
export declare class FileSizeValidator implements Validator, OnChanges {
    private readonly fileUploadService;
    filesize: string | number;
    minsize: string | number;
    maxsize: string | number;
    private validator;
    constructor(fileUploadService: FileUploadService);
    private onChange;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): ValidationErrors | null;
    registerOnValidatorChange(fn: () => void): void;
    private _createValidator;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileSizeValidator, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FileSizeValidator, "file-upload[filesize][formControlName],    file-upload[filesize][formControl],    file-upload[filesize][ngModel],    file-upload[minsize][formControlName],    file-upload[minsize][formControl],    file-upload[minsize][ngModel],    file-upload[maxsize][formControlName],    file-upload[maxsize][formControl],    file-upload[maxsize][ngModel]", never, { "filesize": "filesize"; "minsize": "minsize"; "maxsize": "maxsize"; }, {}, never>;
}
/**
 * A Directive that adds the `fileslimit` validator to controls marked with the
 * `fileslimit` attribute.
 *
 * ### Example
 *
 * ```
 * <file-upload name="files" ngModel fileslimit="2"></file-upload>
 * <file-upload name="files" ngModel [fileslimit]="2"></file-upload>
 * ```
 *
 */
export declare class FilesLimitValidator implements Validator, OnChanges {
    fileslimit: string | number;
    private validator;
    private onChange;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): ValidationErrors | null;
    registerOnValidatorChange(fn: () => void): void;
    private _createValidator;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilesLimitValidator, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FilesLimitValidator, "file-upload[fileslimit][formControlName], file-upload[fileslimit][formControl], file-upload[fileslimit][ngModel]", never, { "fileslimit": "fileslimit"; }, {}, never>;
}
/**
 * A Directive that adds the `accept` validator to controls marked with the
 * `accept` attribute.
 *
 * ### Example
 *
 * ```
 * <file-upload name="files" ngModel accept="file_extension|audio/*|video/*|image/*|media_type"></file-upload>
 * <file-upload name="files" ngModel [accept]="file_extension|audio/*|video/*|image/*|media_type"></file-upload>
 * ```
 *
 * To specify more than one value, separate the values with a comma (e.g. <file-upload accept="audio/*,video/*,image/*"></file-upload>.
 *
 */
export declare class FilesAcceptValidator implements Validator, OnChanges {
    accept: string;
    private validator;
    private onChange;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): ValidationErrors | null;
    registerOnValidatorChange(fn: () => void): void;
    private _createValidator;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilesAcceptValidator, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FilesAcceptValidator, "file-upload[accept][formControlName], file-upload[accept][formControl], file-upload[accept][ngModel]", never, { "accept": "accept"; }, {}, never>;
}
//# sourceMappingURL=validators.directive.d.ts.map