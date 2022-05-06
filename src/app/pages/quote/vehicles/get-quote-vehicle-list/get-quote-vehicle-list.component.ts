import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPolicy, IPolicyResponse } from 'src/app/models/IPolicy';
import { QuoteService } from 'src/app/services/quote.service';
import { GlobalService } from 'src/app/services/global.service';
import { AuthService } from 'src/app/services/auth.service';
import { SharedUtils } from 'src/app/utils/shared-utils';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  IVehicleResponse,
  IVehicles,
  VehicleData,
} from 'src/app/models/IVehicles';

@Component({
  selector: 'app-get-quote-vehicle-list',
  templateUrl: './get-quote-vehicle-list.component.html',
  styleUrls: ['./get-quote-vehicle-list.component.scss'],
})
export class GetQuotevehicleListComponent implements OnInit {
  addNewVehicleForm: FormGroup;
  addVehicleByPolicyNumberForm: FormGroup;
  CustomerId: any;
  displayStyle = 'none';
  vehicles: IVehicles[] = [];
  vehicleLength: any;
  vehicleSelect: any = 0;
  vehiclelayout = true;
  heghtlengh = 'null';
  retrivevehicle = false;
  vehicleNotfound = false;
  cancelPolicy: any = {
    vehicleNotfound: false,
    addNewVehicle: false,
  };
  nolist: boolean = false;
  policyType: string = 'ALL';
  isAddingNewVehicle: boolean = false;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _qoteService: QuoteService,
    private _router: Router,
    private _globalService: GlobalService,
    private _authService: AuthService,
    private changeDetection: ChangeDetectorRef,
    private _sharedUtils: SharedUtils,
    private _formBuilder: FormBuilder
  ) {
    // let userState: any = this._authService.userState.value;
    // this.CustomerId = userState.id;
    this.CustomerId = this._activeRoute.snapshot.params.Id;
  }

  ngOnInit() {
    this._router.url.startsWith('/wazen/manage/cancel-policy') &&
      (this.policyType = 'TPL');
    this.getPolicyByCustomerId();
    // if (this._router.url.startsWith('/wazen/quotes/vehicles/vehicles')) {
    this.addNewVehicleForm = this._formBuilder.group({
      seqNo: new FormControl('', [Validators.required]),
    });
    // }
    //   if (this._router.url.startsWith('/wazen/manage/cancel-policy')) {
    this.addVehicleByPolicyNumberForm = this._formBuilder.group({
      policyNumber: new FormControl('', [Validators.required]),
      insuranceCompany: new FormControl('', [Validators.required]),
      sequenceNumber: new FormControl('', [Validators.required]),
    });
    // }
  }

  getPolicyByCustomerId() {
    this.retrivevehicle = true;
    this._qoteService
      .getVehicleByCutomerId(this.CustomerId, this.policyType)
      .subscribe(
        (res: IVehicleResponse) => {
          console.log(res);
          if (res.succeeded) {
            if (res.data) this.vehicles = res.data;
            else this.vehicleNotfound = false;
            if (this._router.url.startsWith('/wazen/manage/cancel-policy')) {
              // this.cancelPolicy.vehicleNotfound =
              //   res.data && res.data.length == 0;
            }
          }
          this.retrivevehicle = false;
          this.displayStyle = 'none';
        },
        (err) => {
          console.log(err);
          this.retrivevehicle = false;
          if (this._router.url.startsWith('/wazen/manage/cancel-policy')) {
            this.cancelPolicy.vehicleNotfound = true;
          }
        }
      );
  }

  selectedItems = [];
  tempId = [];
  selectItem(index: number) {
    if (this.selectedItems.includes(this.vehicles[index].vehicleData.vehicleId))
      this.selectedItems.splice(index, 1);
    else this.selectedItems.push(this.vehicles[index].vehicleData.vehicleId);

    // = this.selectedItems.filter(
    //   ({ item }) => item !== this.selectedItems[id]
    // );
    // this.policySelect = this.tempId.length;
    // console.log(this.selectedItems[id]);
  }

  isSelectedItem(index: number) {
    return this.selectedItems.includes(
      this.vehicles[index].vehicleData.vehicleId
    ); //this.selectedItems[id] && this.selectedItems[id] === item;
  }

  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
  goBack() {
    this.vehiclelayout = true;
    this.retrivevehicle = false;
    this.vehicleNotfound = false;
  }

  sequenceValue: any;
  AddNewvehicle(SequenceNum: any) {
    this._sharedUtils.showSpinner();
    this.isAddingNewVehicle = true;
    this.vehiclelayout = true;
    this.retrivevehicle = true;
    for (const i in this.addNewVehicleForm.controls) {
      this.addNewVehicleForm.controls[i].markAsDirty();
      this.addNewVehicleForm.controls[i].updateValueAndValidity();
    }
    if (this.addNewVehicleForm.valid) {
      this._qoteService
        .addNewVehicalBySequenceCustomerId(this.CustomerId, SequenceNum)
        .subscribe(
          (res: any) => {
            this.vehiclelayout = true;
            this.retrivevehicle = false;
            if (res.succeeded) {
              this.getPolicyByCustomerId();
              // this.vehicleNotfound = false;
              // this.displayStyle = 'none';
              // res.data['status'] = 'new';
              // this.vehicles.push(res.data);
              // this.vehicleLength = this.vehicles.length;
              // this.changeDetection.detectChanges();
              // console.log(this.policies);
              // setTimeout(() => {
              //   this.vehiclelayout = true;
              //   this.retrivevehicle = false;
              //   this.vehicleNotfound = false;
              //   this.getPolicyByCustomerId(this.CustomerId);
              // }, 3000);
            } else {
              if (res.message == 'Sequence Number already exist')
                this._sharedUtils.showToast(res.message, '0');
              else {
                this.vehiclelayout = false;
                this.vehicleNotfound = true;
                this.displayStyle = 'none';
              }
            }
            this.vehiclelayout = true;
            this.retrivevehicle = false;
            this.isAddingNewVehicle = false;
            this._sharedUtils.hideSpinner();
          },
          (err: any) => {
            window.scroll(0, 0);
            this.retrivevehicle = false;
            this.vehiclelayout = false;
            this.vehicleNotfound = true;
            this.isAddingNewVehicle = false;
            this._sharedUtils.hideSpinner();
          }
        );
    }
  }

  localVehicleData: any = [];
  vehicleDetails() {
    localStorage.setItem(
      'localVehicleData',
      JSON.stringify(this.vehicles)
    );
    this._globalService.vehicalLocalList.next(this.localVehicleData);
    if (
      this._router.url.startsWith(
        '/wazen/manage/upgrade-policy/vehicles/vehicles'
      )
    )
      this._router.navigateByUrl(
        '/wazen/manage/upgrade-policy/choose-quotes/quote-request'
      );
    else if (
      this._router.url.startsWith(
        '/wazen/manage/cancel-policy/vehicles/vehicles'
      )
    ) {
      this._router.navigateByUrl(
        '/wazen/manage/cancel-policy/vehicles/get-quote-vehicle-details/' +
          this.CustomerId
      );
    } else if (
      this._router.url.startsWith('/wazen/manage/feature/vehicles/vehicles')
    ) {
      this._router.navigateByUrl(
        '/wazen/manage/feature/vehicles/get-quote-vehicle-details/' +
          this.CustomerId
      );
    } else
      this._router.navigateByUrl(
        '/wazen/quotes/vehicles/get-quote-vehicle-details/' + this.CustomerId
      );
  }

  addVehicleByPolicyNumber() {
    //this._sharedUtils.showSpinner();
    for (const i in this.addVehicleByPolicyNumberForm.controls) {
      this.addVehicleByPolicyNumberForm.controls[i].markAsDirty();
      this.addVehicleByPolicyNumberForm.controls[i].updateValueAndValidity();
    }
    if (this.addVehicleByPolicyNumberForm.valid) {
      this.vehiclelayout = true;
      this.retrivevehicle = true;
      this._qoteService
        .addNewVehicalByForCancelPolicy(
          this.CustomerId,
          this.addVehicleByPolicyNumberForm
        )
        .subscribe(
          (res: any) => {
            this.vehiclelayout = true;
            if (res.succeeded) {
              // this.vehicleNotfound = false;
              // this.displayStyle = 'none';
              // this.policies.push(res.data);
              // this.policyLength = this.policies.length;
              // this.changeDetection.detectChanges();
              // console.log(this.policies);
              // setTimeout(() => {
              //   this.vehiclelayout = true;
              //   this.retrivevehicle = false;
              //   this.vehicleNotfound = false;
              //   this.getPolicyByCustomerId(this.CustomerId);
              // }, 3000);
            } else {
              this._sharedUtils.showToast(
                'The vehicle policy service cannot be processed. Kindly connect the respective IC',
                '0'
              );
              if (res.message == 'Sequence Number already exist')
                this._sharedUtils.showToast(res.message, '0');
              else {
                this.vehiclelayout = false;
                this.vehicleNotfound = true;
                this.displayStyle = 'none';
              }
              this.retrivevehicle = false;
            }
            this._sharedUtils.hideSpinner();
          },
          (err: any) => {
            window.scroll(0, 0);
            this.retrivevehicle = false;
            this.vehiclelayout = false;
            this.vehicleNotfound = true;
            this._sharedUtils.hideSpinner();
          }
        );
    }
  }
}
