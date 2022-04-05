import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SharedUtils } from 'src/app/utils/shared-utils';

declare var $: any;

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  user: string = '';
  loader:boolean =false;
  changePath:boolean = false;
  disclaimer:boolean = false;
  otpsection:boolean = true;

  constructor(
    private _authService: AuthService,
    private _sharedUtils: SharedUtils,
    private _router: Router,
    ) {
    this._authService.userState.subscribe((res: any) => {
      if (Object.keys(res).length) {
        this.user = res.username;
      }
    });
  }

  ngOnInit() {
    if(!this.user){
      $('#account-popup').modal('show');
      $('#account-popup').on('hidden.bs.modal', function () {
       // window.history.back();
        this._sharedUtils.showSpinner();
        this.loader = true;
        setTimeout(() => {
          this._sharedUtils.showToast(
            'Please log in or sign up..',
            '0'
          );
          this._sharedUtils.hideSpinner();
          this.loader = false;
        }, 2000);
      })
    }
  }


  verifyOtp(){
    this._router.navigateByUrl(
      '/wazen/manage-policies/renew-policies-tabs/vehicle/vehicle-list'
    )
  }

}
