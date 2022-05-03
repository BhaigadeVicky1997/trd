import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DateTimeAdapter } from 'ng-pick-datetime';
import { GlobalService } from 'src/app/services/global.service';
import { QuoteService } from 'src/app/services/quote.service';
import { SharedUtils } from 'src/app/utils/shared-utils';

declare var $: any;

@Component({
  selector: 'app-get-quote-vehicle-view',
  templateUrl: './get-quote-vehicle-view.component.html',
  styleUrls: ['./get-quote-vehicle-view.component.scss'],
})
export class GetQuotevehicleViewComponent implements OnInit {
  constructor(
    private _globalService: GlobalService,
    private _quoteService: QuoteService,
    private _formBuilder: FormBuilder,
    private _sharedUtils: SharedUtils,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _dateTimeAdapter: DateTimeAdapter<any>
  ) {
    let customerId = this._activeRoute.snapshot.params.Id;
    this._globalService.customerId.next(customerId);
  }

  getQuoteWrap = true;
  disabledTraffic = false;
  displayStyle = 'none';
  displayDelete = 'none';
  displayConfirm = 'none';
  activestatus = false;
  violationdata = 'No';
  getQuoteProcess = false;
  disabledQoute = false;
  localVehicleData: any;
  educationArry: any[] = [];
  violationType: any[] = [];
  medicleArry: [] = [];
  purposeArry: [] = [];
  vehicleFormData: FormGroup;
  cancelPolicyForm: FormGroup;
  driverFormData: FormGroup;
  violationFormData: FormGroup;
  OwnerForm: FormGroup;
  vehicleSelectedID: any;
  violationData: any[] = [];
  vData: [] = [];
  quoteData: any;
  editTraffic: any;
  editViolationId: any = '';
  parkingGarage: any;
  vehicleLength;
  showQouotebutton: any = 'Save Details';
  itemIndexes: any = 0;
  isSubmitted: boolean = false;
  VehicalNotSelected: boolean = false;
  maxDate: Date = new Date();
  selectedVehicleIndex: any;
  vehiclePrimaryId: any;
  isParking: boolean = false;
  isMainDriver: boolean = false;
  isTraficViolation: boolean = false;
  isCancelPolicyPage: boolean = false;
  isFeaturePage: boolean = false;
  userDetails: any = null;

  async ngOnInit() {
    if (
      this._router.url.startsWith(
        '/wazen/manage/cancel-policy/vehicles/get-quote-vehicle-details'
      )
    ) {
      this.isCancelPolicyPage = true;
      this.cancelPolicyForm = this._formBuilder.group({
        insuranceCompany: new FormControl('', [Validators.required]),
        reasonForCancellation: new FormControl('', [Validators.required]),
        effectiveCancellationDate: new FormControl(null, [Validators.required]),
      });
    } else if (
      this._router.url.startsWith(
        '/wazen/manage/feature/vehicles/get-quote-vehicle-details'
      )
    ) {
      this.isFeaturePage = true;
    } else {
      this.userDetails = this._globalService.quoteUser.value;

      this.OwnerForm = this._formBuilder.group({
        occupationId: new FormControl('', [Validators.required]),
        educationId: new FormControl('', [Validators.required]),
      });

      this.violationFormData = this._formBuilder.group({
        violationDate: new FormControl('', [Validators.required]),
        violationType: new FormControl(null, [Validators.required]),
      });

      this.driverFormData = this._formBuilder.group({
        driverId: new FormControl(
          { value: this.userDetails.nationalID, disabled: true },
          [Validators.required, Validators.pattern('^[1|2|7]+[0-9]{9}$')]
        ),
        driverName: new FormControl('', [
          Validators.required,
          Validators.pattern('^[A-Z a-z]{5,30}$'),
        ]),
        driverDob: new FormControl('', [Validators.required]),
        driverMedicle: new FormControl(''),
        driverEducation: new FormControl(''),
      });

      this.vehicleFormData = this._formBuilder.group({
        vehiclePurposeId: new FormControl('', [Validators.required]),
        vehicleAvgMil: new FormControl(0, [
          Validators.required,
          Validators.pattern(/^-?(0|[1-9]\d*)?$/),
        ]),
        vehicleEstimateValue: new FormControl(0, [
          Validators.required,
          Validators.pattern(/^-?(0|[1-9]\d*)?$/),
        ]),
      });
      this.getAllEducation();
      this.getAllViolationType();
      this.getAllMedicleIssues();
      this.getAllVehiclePurpose();
      this.changeCalendar();
      window.scrollTo(0, 0);
      setTimeout(() => {
        this.owlSetup();
      }, 1000);
    }

    // this.localVehicleData = this._globalService.vehicalLocalList.value;
    this.localVehicleData = JSON.parse(
      localStorage.getItem('localVehicleData')
    );
    this.selectItem(0);
    this.vehicleLength = Object.keys(this.localVehicleData).length;
  }

  owlSetup() {
    // policies-slider
    $('.policies-slider').owlCarousel({
      loop: false,
      margin: 10,
      nav: true,
      navText: [
        "<div class='nav-btn prev-slide'><i class='bx bx-chevron-left' ></i></div>",
        "<div class='nav-btn next-slide'><i class='bx bx-chevron-right'></i></div>",
      ],
      dots: false,
      autoplay: false,
      slideBy: 'page',
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  }

  onDateChange(event) {
    let date = this.writeHijri(event.value);
    console.log(date);
    // this.getQuoteForm.controls['dateOfBirth'].setValue(date)
  }

  writeHijri(date?, lang?) {
    var date = date || new Date();
    lang = lang || 'en';
    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleString(lang + '-u-ca-islamic', options);
  }

  getAllEducation() {
    this._quoteService.getAllEducation().subscribe((res: any) => {
      this.educationArry = res.data;
      console.log(this.educationArry);
    });
  }

  getAllViolationType() {
    this._quoteService.getAllViolationType().subscribe((res: any) => {
      this.violationType = res.data;
      console.log(this.violationType);
    });
  }

  getAllMedicleIssues() {
    this._quoteService.getAllMedicleIssues().subscribe((res: any) => {
      this.medicleArry = res.data;
      console.log(this.medicleArry);
    });
  }

  getAllVehiclePurpose() {
    this._quoteService.getAllVehiclePurpose().subscribe((res: any) => {
      this.purposeArry = res.data;
      console.log(this.purposeArry);
    });
  }

  selectItem(index: any) {
    $('[href="#driver-details"]').tab('show');
    window.scrollTo(0, 0);
    this.selectedVehicleIndex = index;
    this.VehicalNotSelected = true;
    this.vehicleSelectedID = this.localVehicleData[index].id;
    this.vehiclePrimaryId = this.localVehicleData[index].id;
    !this.isCancelPolicyPage && !this.isFeaturePage && this.setAllDetails();
  }

  vId: any;
  dId: any;
  setAllDetails() {
    this._sharedUtils.showSpinner();
    this._quoteService
      .getAllVehicleDataByVehicleID(this.vehicleSelectedID)
      .subscribe(
        (res: any) => {
          if (res.data) {
            this.violationData = res.data[0].vehicleViolation;
            this.vData = res.data[0].vehicleViolation;
            this.quoteData = res.data;
            console.log(this.quoteData);
            this.dId = this.quoteData[0].dId;
            this.vId = this.quoteData[0].vid;
            //let ddob = new Date(this.quoteData[0].driverDob).toISOString();
            // Set Values
            this.isMainDriver = this.quoteData[0].isMainDriver;
            this.driverFormData.controls['driverId'].setValue(
              this.quoteData[0].driverID
            );
            this.driverFormData.controls['driverName'].setValue(
              this.quoteData[0].driverName
            );
            this.driverFormData.controls['driverDob'].setValue(
              this.quoteData[0].dateOfBirth
            );
            this.driverFormData.controls['driverMedicle'].setValue(
              this.quoteData[0].medicalIssueId || ''
            );
            this.driverFormData.controls['driverEducation'].setValue(
              this.quoteData[0].educationId
            );
            this.vehicleFormData.controls['vehiclePurposeId'].setValue(
              this.quoteData[0].vehiclePurposeId || ''
            );
            this.vehicleFormData.controls['vehicleAvgMil'].setValue(
              this.quoteData[0].averageDailyMileage
            );
            this.vehicleFormData.controls['vehicleEstimateValue'].setValue(
              this.quoteData[0].estimateValue
            );
            this.isParking = this.quoteData[0].parkingGarage;
          }
          this._sharedUtils.hideSpinner();
          // emiratesValue: null
          // isSelected: false
        },
        (err) => {
          this._sharedUtils.hideSpinner();
        }
      );
    this.driverFormData.controls['driverId'].setValue(
      this.userDetails.nationalID
    );
  }

  updateRadioChecked(x) {
    this.disabledTraffic = x === 1;
  }

  addTrafficViolation() {
    this.displayStyle = 'block';
    this.activestatus = true;
    this.editTraffic = 'Save';
    window.scrollTo(0, 0);
  }

  closeAddTrafficViolation() {
    this.displayStyle = 'none';
    this.activestatus = false;
    this.violationdata = 'No';
    this.violationFormData.reset();
  }

  saveTrafficViolation() {
    this._sharedUtils.showSpinner();
    this.displayStyle = 'none';
    this.activestatus = false;
    this.violationdata = 'Yes';

    if (typeof this.vehicleSelectedID != 'undefined') {
      let violationForm = {
        vehicleID: this.vehicleSelectedID,
        violationDate: new Date(
          this.violationFormData.value.violationDate
        ).toISOString(),
        violationTypeId: Number(this.violationFormData.value.violationType),
      };
      if (!this.editViolationId) {
        this._quoteService
          .addVehicleViolation(violationForm)
          .subscribe((res: any) => {
            if (res.succeeded) {
              this.parkingGarage = res.data;
              let violationTypeName = this.violationType.find(
                (x) => x.id == violationForm['violationTypeId']
              );
              this.parkingGarage = {
                ...this.parkingGarage,
                violationTypeName: violationTypeName.name,
              };
              this.violationData.push(this.parkingGarage);
              this._sharedUtils.showToast(
                'Traffic Violation Added Successfully',
                1
              );
              //this.setAllDetails();
            } else {
              this._sharedUtils.showToast('Error', 0);
            }
            this._sharedUtils.hideSpinner();
          });
        this.violationFormData.reset();
        this.editViolationId = '';
      } else {
        let data = {
          id: this.editViolationId,
          vehicleID: this.vehicleSelectedID,
          ...this.violationFormData.value,
        };
        this._quoteService
          .updateVehicleViolationByID(data)
          .subscribe((res: any) => {
            if (res.succeeded) {
              this._sharedUtils.showToast(
                'Traffic Violation Updated Successfully',
                1
              );
              //this.setAllDetails();
              console.log(res);
            } else {
              this._sharedUtils.showToast('Error', 0);
            }
          });
        this.violationFormData.reset();
        this.editViolationId = '';
      }
    } else {
      this._sharedUtils.showToast('Please Select Vehicle', 0);
      this.displayStyle = 'block';
      this.activestatus = true;
    }
    this._sharedUtils.hideSpinner();
  }

  editTrafficViolation(
    editViolationId: any,
    violationDate: Date,
    violationType: any
  ) {
    this.displayStyle = 'block';
    this.activestatus = true;
    this.editTraffic = 'Update';
    this.editViolationId = editViolationId;
    window.scrollTo(0, 0);
    // console.log(violationId +' '+violationDate+' '+violationType );
    this.violationFormData.controls['violationType'].setValue(violationType);
    this.violationFormData.controls['violationDate'].setValue(
      new Date(violationDate).toISOString()
    );
  }

  deleteViolationId: any = '';
  deleteTrafficViolation(violationId: any) {
    this.displayDelete = 'block';
    window.scrollTo(0, 0);
    this.deleteViolationId = violationId;
  }

  closeDeletViolation() {
    this.displayDelete = 'none';
    this.displayConfirm = 'none';
    this.violationFormData.reset();
  }

  // Show remove popup for quote list
  confirmDeletViolation() {
    this._sharedUtils.showSpinner();
    this.displayDelete = 'none';
    //this.displayConfirm = "block";
    this._quoteService
      .deleteVehicleViolationById(this.deleteViolationId)
      .subscribe((res: any) => {
        if (res.succeeded) {
          this._sharedUtils.showToast(
            'Traffic Violation Deleted Successfully',
            1
          );
          let index = this.violationData.indexOf(
            this.violationData.find((x) => x.id == this.deleteViolationId)
          );
          this.violationData.splice(index, 1);
        }
        this._sharedUtils.hideSpinner();
        this.deleteViolationId = '';
        //this.setAllDetails();
      });
  }

  confirmDeletVehicle() {
    this.displayDelete = 'none';
    this.displayConfirm = 'block';
  }

  // Remove vehicle item form list.
  confirmDeletViolatioQuoteList(vehId: any) {
    this.displayConfirm = 'none';
    this.violationdata = 'No';
    this.disabledQoute = true;
    for (let index = 0; index < this.localVehicleData.length; index++) {
      if (vehId.includes(this.localVehicleData[index].vehicleID)) {
        //this.localVehicleData.push(this.localVehicleData[index]);
        this.localVehicleData.splice(this.localVehicleData[index], 1);
        console.log(true);
      }
      // insert updated array to local storage
      localStorage.setItem(
        'localVehicleData',
        JSON.stringify(this.localVehicleData)
      );
    }
    this._sharedUtils.showToast('Vehicle Deleted Successfully', 1);
  }

  tempData: any = [];
  getQuote(driverFdata: any, vehicleFdata: any) {
    this.isSubmitted = true;
    this._sharedUtils.showSpinner();

    for (const i in this.driverFormData.controls) {
      this.driverFormData.controls[i].markAsDirty();
      this.driverFormData.controls[i].updateValueAndValidity();
    }
    for (const i in this.vehicleFormData.controls) {
      this.vehicleFormData.controls[i].markAsDirty();
      this.vehicleFormData.controls[i].updateValueAndValidity();
    }
    if (!this.vehicleFormData.valid) {
      $('[href="#vehicle-details"]').tab('show');
      window.scrollTo(0, 0);
    }
    if (this.vehicleFormData.valid && this.driverFormData.valid) {
      let ddob = new Date(driverFdata.driverDob).toISOString;
      let allData = {
        isMainDriver: this.isMainDriver,
        vId: this.vId,
        vehicleID: this.vehicleSelectedID,
        purposeofVehicle: vehicleFdata.vehiclePurposeId,
        averageDailyMileage: vehicleFdata.vehicleAvgMil,
        parkingGarage: this.isParking,
        emiratesValue: vehicleFdata.vehicleEmiratesValue,
        dId: this.dId,
        driverID: driverFdata.driverId,
        driverName: driverFdata.driverName,
        dateOfBirth: driverFdata.driverDob,
        education: driverFdata.driverEducation,
        medicalIssues: driverFdata.driverMedicle,
        vehicleViolation: this.violationData,
        isSelected: true,
      };
      this._quoteService.updateAllDriverVehicle(allData).subscribe(
        (res: any) => {
          if (res.succeeded) {
            window.scrollTo(0, 0);
            this._sharedUtils.showToast('Vehicle Added Succesfully', 1);
            this.selectedVehicleIndex++;
            this.selectItem(this.selectedVehicleIndex);
            this.driverFormData.reset();
            this.vehicleFormData.reset();
            this.violationFormData.reset();
            if (!this.tempData.includes(this.selectedVehicleIndex)) {
              //checking weather array contain the id
              this.tempData.push(this.selectedVehicleIndex);
            }

            // if (this.selectedItem == this.vehicleLength - 1) {
            //   this.showQouotebutton = 'Get Quote';
            // } else {
            //   this.showQouotebutton = 'Save Details';
            // }
          } else {
            this._sharedUtils.showToast('Error', 0);
          }
          this._sharedUtils.hideSpinner();
          this.isSubmitted = false;
        },
        (err) => {
          this.isSubmitted = false;
        }
      );
      console.log(allData);
      //alert(this.itemIndex +' '+ this.vehicleLength)
      if (this.tempData.length == this.vehicleLength - 1) {
        this.getQuoteProcess = true;
        this.getQuoteWrap = false;
        window.scrollTo(0, 0);
        setTimeout(() => {
          this._router.navigateByUrl(
            '/wazen/quotes/choose-quotes/quote-request'
          );
        }, 3000);
      }
    } else this.isSubmitted = false;
    this._sharedUtils.hideSpinner();
  }

  goToPreviousVehicle() {
    this.selectedVehicleIndex -= 1;
    this.tempData.pop();
    this.selectItem(this.selectedVehicleIndex);
  }
  changeCalendar() {
    this.driverFormData.controls['driverId'].valueChanges.subscribe((value) => {
      let type = (value && value.trim()) || '';
      if (type.startsWith('1')) {
        this._dateTimeAdapter.setLocale('en-u-ca-islamic');
        // this._dateTimeAdapter.format()
        // this._dateTimeAdapter.format(
        //   this.getQuoteForm.controls['dateOfBirth'].value,
        //   'MM/DD/YYYY'
        // );
        this.driverFormData.controls['driverDob'].addValidators(
          Validators.required
        );
      } else if (type.startsWith('2')) {
        this.driverFormData.controls['driverDob'].addValidators(
          Validators.required
        );
        this._dateTimeAdapter.setLocale('en-US');
      } else if (type.startsWith('7')) {
        this.driverFormData.controls['driverDob'].clearValidators();
      }
      this.driverFormData.controls['driverDob'].updateValueAndValidity();
    });
  }
  cancelPolicy() {
    for (const i in this.cancelPolicyForm.controls) {
      this.cancelPolicyForm.controls[i].markAsDirty();
      this.cancelPolicyForm.controls[i].updateValueAndValidity();
    }
    if (this.cancelPolicyForm.valid) {
      this.localVehicleData[this.selectedVehicleIndex]['cancellationDetails'] =
        this.cancelPolicyForm.value;
      this._globalService.cancelVehicleDetails.next([
        ...this._globalService.cancelVehicleDetails.value,
        this.localVehicleData[this.selectedVehicleIndex],
      ]);
      if (this.localVehicleData.length - 1 == this.selectedVehicleIndex) {
        this._router.navigateByUrl(
          '/wazen/manage/cancel-policy/vehicles/review-policy'
        );
      } else {
        this.selectItem(this.selectedVehicleIndex + 1);
        this.cancelPolicyForm.reset();
      }
    }
  }
  reviewFeature() {
    this._router.navigateByUrl('/wazen/manage/feature/vehicles/review-feature');
  }
}
