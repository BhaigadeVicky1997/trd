import { AbstractControl } from '@angular/forms';
import { FileUploadControl } from './control.class';
export interface ValidationError {
    actual: any;
    file: File;
    [key: string]: any;
}
export interface ValidationErrors {
    [key: string]: any;
}
export declare type ValidatorFn = (c: AbstractControl | FileUploadControl) => ValidationErrors | null;
export declare class FileUploadValidators {
    /**
     * Validator that compare the summary size of all files
     */
    static sizeLimit(maxSize: number): ValidatorFn;
    /**
     * Validator that validate individually file maximum size length.
     * Compare the File size in bytes
     * @dynamic
     */
    static fileSize(maxSize: number): ValidatorFn;
    /**
     * Compare the File size in bytes with max and min size limits
     * @dynamic
     */
    static sizeRange({ minSize, maxSize }: {
        minSize?: number;
        maxSize?: number;
    }): ValidatorFn;
    /**
     * validator that requires control to have limit on files number
     * @dynamic
     */
    static filesLimit(numFiles: number): ValidatorFn;
    /**
     * validator that requires control to have limit on media types
     *
     * ##### Allowed media types are
     *
     * - file_extension - a file extension starting with the STOP character,
     * e.g: .gif, .jpg, .png, .doc
     * - audio/* -        All sound files are accepted
     * - video/* -        All video files are accepted
     * - image/* -        All image files are accepted
     * - media_type -     A valid media type, with no parameters. Look at [IANA Media Types]
     *      (https://www.iana.org/assignments/media-types/media-types.xhtml) for a complete list of standard media types
     *
     * #### Example
     * `FileUploadValidators.accept([file_extension, audio/*, video/*, image/*, media_type])`
     * @dynamic
     */
    static accept(allowedFileTypes: Array<string>): ValidatorFn;
    /**
     * validator that requires control to have limit on media types
     *
     * ##### Not allowed media types are
     *
     * - file_extension - a file extension starting with the STOP character,
     * e.g: .gif, .jpg, .png, .doc
     * - audio/* -        All sound files are accepted
     * - video/* -        All video files are accepted
     * - image/* -        All image files are accepted
     * - media_type -     A valid media type, with no parameters. Look at [IANA Media Types]
     *      (https://www.iana.org/assignments/media-types/media-types.xhtml) for a complete list of standard media types
     *
     * #### Example
     * `FileUploadValidators.reject([file_extension, audio/*, video/*, image/*, media_type])`
     * @dynamic
     */
    static reject(rejectFileTypes: Array<string>): ValidatorFn;
}
//# sourceMappingURL=validators.class.d.ts.map