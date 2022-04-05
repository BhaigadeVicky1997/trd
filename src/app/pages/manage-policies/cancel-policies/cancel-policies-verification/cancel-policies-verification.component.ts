import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SharedUtils } from 'src/app/utils/shared-utils';

declare var $: any;

@Component({
  selector: 'app-cancel-policies-verification',
  templateUrl: './cancel-policies-verification.component.html',
  styleUrls: ['./cancel-policies-verification.component.scss']
})
export class CancelPoliciesVerificationComponent implements OnInit {

  user: string = '';
  loader:boolean =false;
  changePath:boolean = false;
  disclaimer:boolean = false;
  otpsection:boolean = true;
  abc:any = 'w1w2kk3kk4k5jk6';

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
 index:any;
  sum:number = 0;
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

    // for(this.index=0; this.index<this.abc.length; this.index++){
    //   if(!isNaN(this.abc[this.index])){
    //     this.sum = this.sum + Number(this.abc[this.index]);
    //   }
    // }
    // console.log(this.sum);
  }

  verifyOtp(){
    this.otpsection = false;
    this.disclaimer = true;
  }

  continueToVehicle(){
    this._router.navigateByUrl(
      '/wazen/manage-policies/cancel-policies-tabs/vehicle-list'
    );

  }





  // if(this.changePath == true){
  //   alert('abc')

  // }



}
