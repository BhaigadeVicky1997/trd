import {
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IFileUploadResponse } from 'src/app/models/IFileUpload';
import { IPolicy, IPolicyResponse } from 'src/app/models/IPolicy';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';
import { SharedUtils } from 'src/app/utils/shared-utils';
import { IQuote, IQuoteResponse } from '../../../../models/IQuote';
import {
  IVehicleImage,
  IVehicleImageResponse,
} from '../../../../models/IVehicleImage';
import { QuoteService } from '../../../../services/quote.service';
import Viewer from 'viewerjs';
import { IPaymentAmt } from '../../../../models/IPaymentAmt';
import { PaymentService } from '../../../../services/payment.service';
import { PaymentformService } from '../../../../services/paymentform.service';
import { IVehicle } from '../../../../models/IVehicle';

declare var $: any;

@Component({
  selector: 'app-view-quote-review',
  templateUrl: './view-quote-review.component.html',
  styleUrls: ['./view-quote-review.component.scss'],
})
export class ViewQuoteReviewComponent implements OnInit, OnDestroy {
  CustomerId: any = '8a8221a9-8cf4-4050-5689-08d9af1ccc6f';
  vehicleId: any = '1';
  comprehensiveResponse: IQuote[] = [];
  vehicleImg: IVehicleImage[] = [];
  policies: IPolicy[] = [];
  isSubmitted: boolean = false;
  selectedIndex: any = 0;
  vehicleSelectedID: any;
  @ViewChild('FileSelectInputDialog') FileSelectInputDialog: ElementRef;
  imageError: any;
  cardImageBase64: any;
  isImageSaved: boolean = false;
  vehicleImage: any;
  policySelect: any = 0;
  savedPolicies = {
    allSaved: false,
    policies: [],
  };
  selectedVehicle: any = null;
  selectedItem: any;
  @ViewChild('additionalModal') additionalModal;
  additionalCharges: any = [
    { name: 'GCC Coverage', value: 100, checked: false },
    { name: 'Pick up Service', value: 300, checked: false },
    { name: 'Rent a Vehicle', value: 200, checked: false },
  ];
  serviceCharges: any = [
    { name: 'Twinia (Non refundable)', value: 23 },
    { name: 'Wazen', value: 10 },
  ];
  premiumAmount: number = 1500;
  vat: number = 50;
  totalAmount: number = 0;
  grandTotal: number = 0;
  vehicles: any[] = [];
  isSelectedVehicleSaved: boolean = false;
  paymentAmt: IPaymentAmt;
  inputFields: string;
  redirectform: string;
  // IVehicle[]
  vehicleChosenList: any[] = [];
  sumServiceCharge: number = 0;
  sumAdditionalCoverage: number = 0;
  compeletedVehicles: number = 0;
  files: any = [];
  showTermsPopup: boolean = false;
  isTermsAccepted: boolean = false;
  constructor(
    private _globalService: GlobalService,
    private _quoteService: QuoteService,
    public sharedUtils: SharedUtils,
    private _paymentFormService: PaymentformService,
    private _authService: AuthService,
    private _router: Router
  ) {
    this.CustomerId = this._globalService.customerId.value;
     this.vehicles = this._globalService.selectedPolicyForVehicles.value;
    console.log(this.vehicles)
    this.vehicles.forEach((vehicle) => {
      vehicle.valid = false;
      vehicle.save = false;
      vehicle.policyDetails.premium.additionalCovers.forEach((x) => {
        x.checked = false;
      });
    });
    console.log('vehicles', this.vehicles);
  }
  ngOnDestroy(): void {
    console.log('Destroyed');
    this._authService.userState.unsubscribe();
  }

  ngOnInit(): void {
    // this.getquoteresponse(this.CustomerId);
    this.getPolicyByCustomerId();
    console.log('saved policies', this.savedPolicies);
    this.selectItem(this.selectedIndex);
  }

  getPolicyByCustomerId() {
    this.policies = JSON.parse(localStorage.getItem('localpolicyDetails'));
    if(this.policies){
      this.policies.every((x: any) =>
      this.savedPolicies.policies.push({
        id: x.policyDetails.vehicleId,
        saved: false,
        valid: false,
        policyAmt: 0,
      })
    );
    }

    // this.vehicleLength = Object.keys(this.localpolicyDetails).length;
  }
  tempData2: any = [];
  onAdditionalChargesChange(index: number) {
    console.log(this.selectedVehicle)
    this.selectedVehicle.premium.additionalCovers[index].checked =
      !this.selectedVehicle.premium.additionalCovers[index]
        .checked;
    let charges =
      this.selectedVehicle.premium.additionalCovers[index];
    if (charges.checked) this.totalAmount += charges.featureAmount;
    else this.totalAmount -= charges.featureAmount;
  }

  // getquoteresponse(CustomerId) {
  //   console.log(this.insuranceType);
  //   this._quoteService
  //     .getquoteResponseByType(this.insuranceType, this.CustomerId)
  //     .subscribe(
  //       (res: IQuoteResponse) => {
  //         console.log(res);
  //         if (res.succeeded) {
  //           this.comprehensiveResponse = res.data;

  //           console.log('quote details');
  //           console.log(this.comprehensiveResponse);
  //         }
  //       },
  //       (err) => console.log(err)
  //     );
  // }
  addVehicleImage() {
    this._quoteService
      .addVehicleImage(this.vehicleSelectedID, this.vehicleImage)
      .subscribe(
        (res: IVehicleImageResponse) => {
          console.log(res);
          if (res.succeeded) {
            this.vehicleImg = res.data;
          }
        },
        (err) => console.log(err)
      );
  }
  
  tempData: any = [];
  selectItem(index: number, isSelectedVehicleSaved = false) {
    console.log(index)
    window.scrollTo(0, 0);
    this.isSelectedVehicleSaved = isSelectedVehicleSaved;
    this.selectedItem = index;
    this.vehicleImage = '';
    this.selectedIndex = index;
    this.vehicleSelectedID = this.vehicles[index].policyDetails.vehicleId;
    console.log(this.vehicleSelectedID)
    this.isImageSaved = false;
    this.selectedVehicle = this.vehicles[index].policyDetails;
    console.log(this.selectedVehicle)
    if (!isSelectedVehicleSaved) {
      this.totalAmount =
        this.selectedVehicle.premium?.totalPremium + this.vat;
      this.serviceCharges.forEach((element) => {
        this.totalAmount += element.value;
      });
    }
    console.log('tamt', this.totalAmount);
    // this.getVehicleDetailsById();
  }
  getVehicleDetailsById() {
    this._quoteService.getVehicleByCutomerId(this.CustomerId).subscribe(
      (res: any) => {
        console.log(res);
        if (res.succeeded) {
          this.policies = res.data;
        }
      },
      (err) => console.log(err)
    );
  }

  openAddFilesDialog() {
    const e: HTMLElement = this.FileSelectInputDialog.nativeElement;
    e.click();
  } 

  fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const max_size = 20971520;
      const allowed_types = ['image/png', 'image/jpeg'];
      const max_height = 512;
      const max_width = 512;

      if (fileInput.target.files[0].size > max_size) {
        this.imageError = 'Maximum size allowed is ' + max_size / 1000 + 'Mb';

        return false;
      }

      if (!allowed_types.includes(fileInput.target.files[0].type)) {
        this.imageError = 'Only Images are allowed ( JPG | PNG )';
        return false;
      }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          const img_height = rs.currentTarget['height'];
          const img_width = rs.currentTarget['width'];
          // if (img_height > max_height && img_width < max_width) {
          //   this.imageError =
          //     'Maximum dimentions allowed ' +
          //     max_height +
          //     '*' +
          //     max_width +
          //     'px';
          //   return false;
          // } else {
          // }
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
  uploadVehicleImage(file: File) {
    this._quoteService
      .uploadVehicleImage(file)
      .subscribe((res: IFileUploadResponse) => {
        console.log(res);
        this.vehicleImage += !this.vehicleImage
          ? res.fileName
          : `, ${res.fileName}`;
        // this.initViewer();
        setTimeout(() => {
          this.initViewer();
        }, 1000);

        this.isImageSaved = true;
      });
  }

  initViewer() {
    const viewer = new Viewer(document.getElementById('image'), {
      inline: false,
      viewed() {},
    });
  }

  saveQuoteResponse() {
    this.isSubmitted = true;
    this.addVehicleImage();
    // if (this.policySelect == this.vehicles.length) this.checkoutPolicies();
    // else {
    //   this.selectedVehicle.save = true;
    // }
    // let savedVehicles = this.vehicles.filter((x: any) => x.save == true);
    // this.policySelect = savedVehicles.length;
    this.vehicles.forEach((vehicle) => {
      vehicle.valid = false;
      vehicle.save = true;
      // vehicle.policyDetails.premium.additionalCovers.forEach((x) => {
      //   x.checked = false;
      // });
    });
    this.selectedVehicle.save = true;
    this.isSubmitted = false;
    this.sharedUtils.showToast(
      'Image has been saved successfully, please accept additional coverages',
      '1'
    );
  }
  tempData3: any = [];
  saveVehicle() {
    console.log('save vehicle')
    // this.grandTotal += this.totalAmount;
    // this.grandTotal += parseInt(
    //   this.selectedVehicle.policyDetails.premium.totalPremium
    // );
    this.selectedVehicle.valid = true;
    this.vehicles.forEach((vehicle)=>{
      vehicle.save = true;
      vehicle.valid = true;
    })
    if (this.selectedIndex == this.vehicles.length - 1) {
      this.sharedUtils.showToast('Please checkout policies', '1');
    }
    this.isSubmitted = false;
    this.isSelectedVehicleSaved = true;
    this.closeAdditionalPopup();
  }
  onNextPolicy() {
    console.log('HI CHECKOUT');
    console.log(this.vehicles);
    console.log(this.selectedVehicle)
    // this._authService.userFlagForSpecialCase.next(true);
    this.selectedVehicle['totalAmount'] = this.totalAmount;
    this.makeVehiclePolicy();
    this.grandTotal += this.totalAmount;
    this.totalAmount = 0;
    // this.selectedVehicle.policyDetails.premium.additionalCovers.forEach(
    //   (charge) => (charge.checked = false)
    // );

    this.compeletedVehicles = this.vehicles.filter(
      (x) => x.save == true
    ).length;
    if (this.selectedIndex == this.vehicles.length - 1) {
      let user = this._authService.userState.value;
      if (!Object.keys(user).length) {
        this._authService.userState.subscribe((res) => {
          console.log(res)
          if (Object.keys(res).length) {
            this.checkoutPolicies();
          }
        });
        $('#account-popup').modal('show');
      } else {
        if (
          this._router.url.startsWith(
            '/wazen/manage/upgrade-policy/choose-quotes/quote-review'
          )
        ) {
          this.showTermsPopup = true;
          return;
        }
        this.checkoutPolicies();
      }
    } else {
      this.selectItem(this.selectedIndex + 1);
    }
    window.scrollTo(0, 0);
  }
  checkoutPolicies() {
    console.log('Chcckp')
    if (
      this._router.url.startsWith(
        '/wazen/manage/upgrade-policy/choose-quotes/quote-review'
      )
    )
      if (!this.isTermsAccepted) return;

    this.sharedUtils.showSpinner();
    this._globalService.idID.subscribe(icid=>{
      this.paymentAmt = {
        totalAmount: Math.round(this.grandTotal * 100),
        // language: 'en',
        vehicleList: this.vehicleChosenList,
        icid: icid,
        customerId: this.CustomerId
      };
    })
    console.log(this.paymentAmt);
    console.log('Old Quote!')
    
    this._paymentFormService.getPaymentForm(this.paymentAmt).subscribe(
      (res: any) => {

        if (res.succeeded) {
          this.inputFields = res.data;
          console.log(this.inputFields);
        
          setTimeout(() => {
            this._globalService.quoteUser.next({});
            document.forms['redirectFormdata'].submit();
            this.sharedUtils.hideSpinner();
          }, 1000);
        }
      },
      (err) => {
        console.log(err);
        this.sharedUtils.hideSpinner();
      }
    );
  }
  openAdditionalPopup() {
    window.scrollTo(0, 0);
    this.additionalModal.nativeElement.style.display = 'block';
  }
  closeAdditionalPopup() {
    this.additionalModal.nativeElement.style.display = 'none';
  }
  onChange(e: Array<File>) {
    this.selectedVehicle['files'] = e;
    this.vehicleImage = '';
    e.forEach((x: File) => {
      this.uploadVehicleImage(x);
    });
  }
  goToPreviousVehicle() {
    // this.isSelectedVehicleSaved = false;
    this.selectedIndex--;
    this.totalAmount = 0;
    this.selectItem(this.selectedIndex, true);
    this.files = this.selectedVehicle.files;
  }

  makeVehiclePolicy() {
    console.log(this.selectedVehicle)
   
    this.serviceCharges.forEach((element) => {
      this.sumServiceCharge += element.value;
    });
    this.selectedVehicle.premium.additionalCovers.forEach(
      (element) => {
        if (element.checked == true) {
          this.sumAdditionalCoverage += element.featureAmount;
        }
      }
    );
    let additionalCovers =
      this.selectedVehicle.premium.additionalCovers.filter(
        (charge) => charge.checked == true
      );
    this.vehicleChosenList.push({
      customerID: this.CustomerId,
      policyTypeId: this.selectedVehicle.product,
      // expiryDate: this.selectedVehicle.expiryDate,
      // vehicleId: this.selectedVehicle.vehicleId,  
      insuranceCompanyName: 'ACIG',
      // vehicleModel: this.selectedVehicle.vehicleModel,
      // vehicleNumber: this.selectedVehicle.vehicleNumber,
      // vehicleMake: this.selectedVehicle.vehicleMake,
      premiumAmount:
        this.selectedVehicle.premium.totalPremium.toString(),
        additionalCoverageAmount: this.sumAdditionalCoverage.toString(),
        serviceChargeAmount: this.sumServiceCharge.toString(),
      // additionalCoverage: JSON.stringify(additionalCovers),
      vat: this.vat.toString(),
    });
    this.sumServiceCharge = 0;
    this.sumAdditionalCoverage = 0;
  }
  removeVehicle(index) {
    if (this.vehicles.length > 1) {
      if (this.vehicles[index].save)
        this.grandTotal &&
          (this.grandTotal -= this.vehicles[index].totalAmount);
      this.vehicles.splice(index, 1);
      this.vehicleChosenList.splice(index, 1);
      if (this.selectedIndex && this.selectedIndex > index) {
        this.selectedIndex -= 1;
        this.selectItem(this.selectedIndex);
      }
      this.compeletedVehicles = this.vehicles.filter(
        (x) => x.save == true
      ).length;
    } else {
      this.sharedUtils.showToast('Should have atleast one vehicle', '0');
      return;
    }
  }
}
