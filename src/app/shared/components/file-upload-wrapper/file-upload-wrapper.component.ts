import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import {
  FileUploadControl,
  FileUploadValidators,
} from '@iplab/ngx-file-upload';
import { BehaviorSubject, Subscription } from 'rxjs';
import { SharedUtils } from 'src/app/utils/shared-utils';

@Component({
  selector: 'app-file-upload-wrapper',
  templateUrl: './file-upload-wrapper.component.html',
  styleUrls: ['./file-upload-wrapper.component.scss'],
  // host: {
  //   class: 'col-6 img-upload-area'
  // }
})
export class FileUploadWrapperComponent implements OnInit, OnChanges {
  public readonly uploadedFile: BehaviorSubject<any[]> = new BehaviorSubject(
    []
  );

  private subscription: Subscription;

  public readonly control = new FileUploadControl(
    {
      listVisible: true,
      accept: ['.jpeg,.png,.doc,.docs,.pdf'],
      discardInvalid: false,
      multiple: false,
    },
    [
      FileUploadValidators.accept(['.jpeg,.png,.doc,.docs,.pdf']),
      FileUploadValidators.filesLimit(4),
      // FileUploadValidators.fileSize(5000000),
      //FileUploadValidators.fileSize(100000),
    ]
  );

  @Output() onChange: EventEmitter<any[]> = new EventEmitter();
  @Input() reset: number = 0;
  @Input() files: Array<File> = [];
  constructor(private _sharedUtils: SharedUtils) {}

  ngOnChanges() {
    if (this.reset) {
      this.control.setValue([]);
    }
    if (this.files.length) {
      this.control.setValue(this.files);
    }
  }

  ngOnInit(): void {
    this.subscription = this.control.valueChanges.subscribe(
      (values: Array<File>) => {
        const max_size = 100000;

        let result = this.uploadedFile.value.filter(
          (o1) => !values.some((o2) => o1.name === o2.name)
        );
        let index = this.uploadedFile.value.indexOf(result[0]);
        console.log(result);
        this.uploadedFile.value.splice(index, 1);
        if (values.length > 4) {
          this._sharedUtils.showToast('Maximum 4 files can be uploaded', '0');
        }
        values.forEach((x: any, i) => {
          // if (x.size > max_size) {
          //   this._sharedUtils.showToast(
          //     'File size should be less than 100kb',
          //     '0'
          //   );
          //   values.splice(i, 1);
          //   return false;
          // }
          if (i > 3) {
            values.splice(i, 1);
          } else this.getImage(x);
        });
        this.onChange.emit(values);
      }
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getImage(file: File): void {
    console.log(file);
    if (FileReader && file) {
      const fr = new FileReader();
      fr.onload = (e: any) => {
        let isPresent = this.uploadedFile.value.find(
          (x) => x.name == file.name
        );
        if (!isPresent) {
          let data = {
            name: file.name,
            binary: e.target.result,
          };
          this.uploadedFile.next([...this.uploadedFile.value, data]);
        }
        console.log(this.uploadedFile.value);
      };
      fr.readAsDataURL(file);
    } else {
      this.uploadedFile.next(null);
    }
  }
  openImage(data) {
    // window.open(data, '_blank');
    var myWindow = window.open(data, '_blank');
    myWindow.location.href = myWindow.location.href;
    // location.reload();
  }
}
