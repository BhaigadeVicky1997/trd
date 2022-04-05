import { Injectable, QueryList, ViewChildren } from '@angular/core';
import { GlobalConfig, ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { cloneDeep, random } from 'lodash-es';
import { CustomToastComponent } from '../shared/components/custom-toast/custom-toast.component';

@Injectable({ providedIn: 'root' })
export class SharedUtils {
  options: GlobalConfig | undefined;
  @ViewChildren(ToastContainerDirective) inlineContainers!: QueryList<ToastContainerDirective>;
  constructor(
    private _toastr: ToastrService,
    private _spinner: NgxSpinnerService,
    public toastr: ToastrService
  ) {
    this.options = this.toastr.toastrConfig;
  }
  isNumber(evt) {
    var iKeyCode = evt.which ? evt.which : evt.keyCode;
    return !(
      iKeyCode != 46 &&
      iKeyCode > 31 &&
      (iKeyCode < 48 || iKeyCode > 57)
    );
  }
  isAlphabet(evt) {
    var keyCode = evt.keyCode || evt.which;
    var regex = new RegExp('^[a-zA-Z ]+$');
    return regex.test(String.fromCharCode(keyCode));
  }
  getFilePath(fileName): string {
    return `${environment.fileUrl}${fileName}`;
  }

  showSpinner() {
    this._spinner.show();
  }
  hideSpinner() {
    this._spinner.hide();
  }

  showToast(msg, type) {
    const opt: any = cloneDeep(this.options);
    opt.toastComponent = CustomToastComponent;
    opt.toastClass = 'notyf confirm';

    this.toastr.show(msg, type, opt)
    // switch (type) {
    //   case 1:
    //     this._toastr.info(
    //       '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
    //       '',
    //       {
    //         timeOut: 40000,
    //         closeButton: true,
    //         enableHtml: true,
    //         toastClass: 'alert alert-info alert-with-icon',
    //         positionClass: 'toast-top-right',
    //       }
    //     );
    //     break;
    //   case 2:
    //     this._toastr.success(
    //       '<i class="bx bx-check"></i><span data-notify="icon" class="bx bx-check"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
    //       '',
    //       {
    //         timeOut: 40000,
    //         closeButton: true,
    //         enableHtml: true,
    //         toastClass: 'alert alert-info alert-with-icon',
    //         positionClass: 'toast-top-right',
    //       }
    //     );
    //     break;
    //   case 3:
    //     this._toastr.warning(
    //       '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
    //       ''
    //     );
    //     break;
    //   case 4:
    //     this._toastr.error(
    //       '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
    //       ''
    //     );
    //     break;
    //   case 5:
    //     this._toastr.show(
    //       '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
    //       ''
    //     );
    //     break;
    //   default:
    //     break;
    // }
  }
}
