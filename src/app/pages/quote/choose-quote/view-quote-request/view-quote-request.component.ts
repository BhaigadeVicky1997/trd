import { OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPolicy, IPolicyResponse } from 'src/app/models/IPolicy';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';
import { QuoteService } from 'src/app/services/quote.service';
import { SharedUtils } from 'src/app/utils/shared-utils';
import {
  IQuote,
  IQuoteResponse,
  PremiumDetail,
  Quote,
} from '../../../../models/IQuote';

declare var $: any;

@Component({
  selector: 'app-view-quote-request',
  templateUrl: './view-quote-request.component.html',
  styleUrls: ['./view-quote-request.component.scss'],
})
/** view-quote-request component*/
export class ViewQuoteRequestComponent implements OnInit {
  /** view-quote-request ctor */
  CustomerId: any;
  comprehensiveResponse: Quote[] = [];
  tplResponse: Quote[] = [];
  selectedTab: number = 0;
  @ViewChild('detailsPopup') detailsPopup;
  @ViewChild('deductionPopup') deductionPopup;
  @ViewChild('detailsPopupClose') detailsPopupClose;
  policies: any[] = [];
  policyLength: any;
  policySelect: any = 0;
  vehicleSelectedID: any;
  selectedVehicleIndex: number = 0;
  savedPolicies = {
    allSaved: false,
    policies: [],
  };
  isSubmitted: boolean = false;
  policy: Quote;
  grandTotal: number = 0;
  selectedPolicyAmt: number = 0;
  vehicleSaved: boolean = false;
  insuranceCompaines: Quote[] = [];
  filteredInsuranceCompaines: Quote[] = [];
  policyPremiums: PremiumDetail[] = [];
  deductionSelectedIndex: any[] = [];
  selectedDeductionIndex: number = 0;
  selectedPolicyIndex: number = 0;
  insuranceType: string = 'Comprehensive';
  savedVehicles: any[] = [];
  compeletedVehicles: number = 0;
  isQuoteResponse: boolean = false;
  quoteResponseType: number = 0;
  constructor(
    private _authService: AuthService,
    private _quoteService: QuoteService,
    private _router: Router,
    private _sharedUtils: SharedUtils,
    private _globalService: GlobalService
  ) {
    this.CustomerId = this._globalService.customerId.value;
  }
  selectedItem: any;

  ngOnInit(): void {
    console.log(this.CustomerId);
    setTimeout(() => {
      this.owlSetup();
    }, 1000);
    this.getPolicyByCustomerId();
    this.selectItem(0);
    //this.getquoteResponseByType(this.policies[0].vehicleId);
    if (
      this._router.url.startsWith(
        '/wazen/manage/upgrade-policy/choose-quotes/quote-request'
      )
    )
      this.quoteResponseType = 1;
  }


  onTabChange(tab) {
    this.selectedTab = tab;
    this._sharedUtils.showSpinner();
    this.insuranceType = this.selectedTab == 0 ? 'Comprehensive' : 'TPL';
    // this.1 = this.insuranceCompaines.filter(
    //   (x) => x.product == this.insuranceType
    // );
    this.getquoteResponseByType(this.vehicleSelectedID)
    this._sharedUtils.hideSpinner();
  }
  openDetailsPopup(index, type?) {
    this.selectedPolicyIndex = index;
    this.policy = this.filteredInsuranceCompaines[index];
    this.detailsPopup.nativeElement.style.display = 'block';
  }
  closeDetailsPopup(event?) {
    this.detailsPopup.nativeElement.style.display = 'none';
    // let detailsModal = this.detailsPopupClose.nativeElement.children[0];
    // if (event.target == detailsModal) {
    // }
  }
  openDeductionPopup(policyIndex) {
    this.selectedPolicyIndex = policyIndex;
    this.selectedDeductionIndex = this.deductionSelectedIndex[policyIndex];
    this.policyPremiums =
      this.filteredInsuranceCompaines[policyIndex].premiumDetails;
    this.deductionPopup.nativeElement.style.display = 'block';
  }

  closeDeductionPopup() {
    this.deductionPopup.nativeElement.style.display = 'none';
  }
  openDetailsPopupForMobile(id) {
    this.detailsPopup.nativeElement.style.display = 'block';
  }
  closeDetailsPopupForMobile(event) {
    let detailsModal = this.detailsPopupClose.nativeElement.children[0];
    if (event.target == detailsModal) {
      this.detailsPopup.nativeElement.style.display = 'none';
    }
  }
  openDeductionPopupForMobile() {
    this.deductionPopup.nativeElement.style.display = 'block';
  }

  closeDeductionPopupForMobile() {
    this.deductionPopup.nativeElement.style.display = 'none';
  }

  getPolicyByCustomerId() {
    this.policies = JSON.parse(localStorage.getItem('localVehicleData'));
    this.policies.every((x: any) =>
      this.savedPolicies.policies.push({
        id: x.vehicleData.vehicleId,
        saved: false,
        valid: false,
        policyAmt: 0,
      })
    );

    // this._quoteService.getSelectedVehicleByCutomerId(this.CustomerId).subscribe(
    //   (res: IPolicyResponse) => {
    //     console.log(res);
    //     if (res.succeeded) {
    //       this.policies = res.data;
    //       this.policies.every((x: any) => this.savedPolicies.policies.push({ id: x.vehicleId, saved: false, valid: false }))
    //       this.policyLength = res.data.length;
    //     }
    //   },
    //   (err) => console.log(err)
    // );
  }

  selectItem(index: number) {
    this.vehicleSelectedID = this.policies[index].vehicleData.vehicleId;
    this.getquoteResponseByType(this.vehicleSelectedID);
    window.scrollTo(0, 0);
    this.grandTotal && this.clearData();
    this.selectedItem = index;
    this.selectedVehicleIndex = index;

    //this.setAllDetails();
    this.selectedDeductionIndex = Math.round(this.policyPremiums.length / 2);
    // this.deductionSelectedIndex[index] = this.selectedDeductionIndex;
  }

  clearData() {
    // this.grandTotal = 0;
    this.vehicleSaved = false;
    this.policy = null;
    this.selectedPolicyAmt = 0;
    this.selectedDeductionIndex = 0;
    this.selectedPolicyIndex = 0;
    this.onTabChange(0);
  }

  setAllDetails() {
    this._quoteService
      .getAllVehicleDataByVehicleID(this.vehicleSelectedID)
      .subscribe((res: any) => {
        // this.violationData =  res.data[0].vehicleViolation;
        // this.quoteData =  res.data;
        // console.log(this.quoteData[0].dateOfBirth);
        // console.log(this.quoteData);
        // //let ddob = new Date(this.quoteData[0].driverDob).toISOString();
        // // Set Values
        // this.driverFormData.controls["driverId"].setValue(this.quoteData[0].driverId);
        // this.driverFormData.controls["driverName"].setValue(this.quoteData[0].driverName);
        // this.driverFormData.controls["driverDob"].setValue(this.quoteData[0].driverDob);
        // this.driverFormData.controls["driverMedicle"].setValue(this.quoteData[0].medicalIssues);
        // this.driverFormData.controls["driverEducation"].setValue(this.quoteData[0].education);
        // this.vehicleFormData.controls["vehiclePurpose"].setValue(this.quoteData[0].purposeofVehicle);
        // this.vehicleFormData.controls["vehicleAvgMil"].setValue(this.quoteData[0].averageDailyMileage);
        // this.vehicleFormData.controls["vehicleEmiratesValue"].setValue(this.quoteData[0].emiratesValue);
        // this.parkingGarage = this.quoteData[0].parkingGarage;
      });
  }

  getquoteResponseByType(vehicleId: string) {
    this.insuranceType = this.selectedTab == 0 ? 'Comprehensive' : 'TPL';
    this.isQuoteResponse = false;
    this._quoteService
      .getquoteResponseByType(this.CustomerId, vehicleId, this.insuranceType)
      .subscribe(
        (res: IQuoteResponse) => {
          console.log(res);
          if (res.succeeded) {
            if (this.selectedTab == 0)
              this.comprehensiveResponse = res.data.quote;
            else this.tplResponse = res.data.quote;
            this.insuranceCompaines = res.data.quote;
            this.filteredInsuranceCompaines = res.data.quote.filter(
              (x) => x.product == this.insuranceType
            );
            this.deductionSelectedIndex = Array(
              this.filteredInsuranceCompaines.length
            ).fill(0);
            console.log(this.deductionSelectedIndex);
            this.isQuoteResponse = true;
            this._globalService.vehiclePolicies.next([
              ...this._globalService.vehiclePolicies.value,
              this.insuranceCompaines,
            ]);
            // this.selectItem(this.selectedVehicleIndex);
          }
        },
        (err) => console.log(err)
      );
  }
  onConfirmPolicy() {
    if (this.savedVehicles[this.selectedVehicleIndex]?.saved) {
      this.vehicleSaved =
        this.savedVehicles[this.selectedVehicleIndex]['saved'];
    }
    let index = this.selectedPolicyIndex;
    this.selectedPolicyAmt =
      this.policy.premiumDetails[
        this.selectedTab == 0 ? this.deductionSelectedIndex[index] : 0
      ].totalPremium;

    let selectedPolicy: any =
      this.policy.premiumDetails[
        this.selectedTab == 0
          ? this.deductionSelectedIndex[this.selectedPolicyIndex]
          : 0
      ];
    let policyDetails = {
      companyName: this.policy.companyName,
      product: this.policy.product,
      vehicleId: this.policy.vehicleId,
      premium: selectedPolicy,
    };

    this.savedVehicles[this.selectedVehicleIndex] = {
      ...this.policies[this.selectedVehicleIndex].vehicleData,
      policyDetails,
    };
    this.savedVehicles[this.selectedVehicleIndex]['valid'] = true;
    this.savedVehicles[this.selectedVehicleIndex]['deductableIndex'] =
      this.selectedDeductionIndex;
    this.savedVehicles[this.selectedVehicleIndex]['selectedTab'] =
      this.selectedTab;
    this.savedVehicles[this.selectedVehicleIndex]['policyIndex'] =
      this.selectedPolicyIndex;
    this.closeDetailsPopup();
  }
  tempData: any = [];
  tempData2: any = [];
  tempData3: any = [];

  saveQuoteResponse() {
    this.isSubmitted = true;
    this.saveVehicle();
  }

  // saveVehicle() {
  //   let vehicle = this.savedPolicies.policies.find(
  //     (x: any) => x.id == this.vehicleSelectedID
  //   );
  //   this.tempData3.push(vehicle);
  //   console.log(vehicle);
  //   console.log('vehicle:', vehicle.valid);
  //   if (vehicle.valid) {
  //     vehicle.saved = true;
  //     vehicle.policyAmt =
  //       this.policy.premiumDetails[this.selectedDeductionIndex].totalPremium;
  //     let savedVehicles = this.savedPolicies.policies.filter(
  //       (x: any) => x.saved == true
  //     );
  //     this.grandTotal +=
  //       this.policy.premiumDetails[this.selectedDeductionIndex].totalPremium;
  //     this.policySelect = savedVehicles.length;
  //     this.vehicleSaved = true;
  //     this.selectedItem = this.selectedItem + 1;

  //     if (this.policySelect == this.policies.length) {
  //       this._sharedUtils.showToast('Please review your vehicles.', '1');
  //       this.savedPolicies.allSaved = true;
  //       this._globalService.selectedPolicyForVehicles.next(
  //         this.savedPolicies.policies
  //       );
  //     } else {
  //       this._sharedUtils.showToast('Policy added.', '1');
  //       this.selectItem(this.selectedIndex + 1);
  //       if (!this.tempData.includes(this.selectedItem)) {
  //         console.log('inside', this.selectedItem);
  //         this.tempData.push(this.selectedItem);
  //         console.log('Temp Data inside', this.tempData);
  //       }
  //     }
  //   } else {
  //     this._sharedUtils.showToast('Please select a policy.', '0');
  //   }
  //   this.isSubmitted = false;
  //   window.scrollTo(0, 0);
  // }

  saveVehicle() {
    // debugger;
    console.log(this.savedVehicles);

    let vehicle = this.savedVehicles.find(
      (x: any) => x.vehicleId == this.vehicleSelectedID
    );
    if (vehicle && vehicle.valid) {
      this.savedVehicles[this.selectedVehicleIndex]['saved'] = true;
      let savedVehicles = this.savedPolicies.policies.filter(
        (x: any) => x.saved == true
      );
      this.grandTotal = 0;
      this.savedVehicles.forEach((x) => {
        this.grandTotal += x.policyDetails.premium.totalPremium;
      });
      console.log(savedVehicles);
      this.policy.premiumDetails[
        this.selectedTab == 0 ? this.selectedDeductionIndex : 0
      ].totalPremium;
      this.policySelect = savedVehicles.length;
      this.vehicleSaved = true;
      this.selectedItem = this.selectedItem + 1;

      if (this.selectedVehicleIndex == this.policies.length - 1) {
        
        this._globalService.selectedPolicyForVehicles.next(this.savedVehicles);
        
        this._router.navigateByUrl('wazen/quotes/choose-quotes/quote-review');
      } else {
        this._sharedUtils.showToast('Policy added.', '1');
        this.selectItem(this.selectedVehicleIndex + 1);
        // this.compeletedVehicles =
        // this.selectedDeductionIndex = 0;
      }
    } else {
      this._sharedUtils.showToast('Please select a policy.', '0');
    }
    this.isSubmitted = false;
    window.scrollTo(0, 0);
  }

  reviewVehicle() {
    this._router.navigateByUrl('wazen/quotes/choose-quotes/quote-review');
  }

  isValidData(vehicleId) {
    let vehicle = this.savedPolicies.policies.find(
      (x: any) => x.id == vehicleId
    );

    vehicle.valid = true;
  }

  owlSetup() {
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

  goToPreviousVehicle() {
    // console.log(this._globalService.selectedPolicyForVehicles.value);

    this.selectedItem -= 1;
    // this.grandTotal -= parseInt(this.tempData2[this.tempData2.length - 1]);
    // let vehicle = this.tempData3[this.tempData3.length - 1];
    // vehicle.saved = false;
    // vehicle.valid = false;
    // vehicle.policyAmt = 0;
    // this.tempData3.pop();
    // this.savedPolicies.allSaved = false;
    // this.tempData2.pop();
    // this.tempData.pop();
    // this.policySelect -= 1;

    this.selectItem(this.selectedItem);
    this.onTabChange(this.savedVehicles[this.selectedItem].selectedTab);
    this.selectedDeductionIndex =
      this.savedVehicles[this.selectedItem].deductableIndex;
    this.selectedPolicyIndex =
      this.savedVehicles[this.selectedItem].policyIndex;
    this.onConfirmPolicy();
  }
  onDeductionChange(index: any) {
    this.deductionSelectedIndex[this.selectedPolicyIndex] = index;
    console.log(this.deductionSelectedIndex);
    this.closeDeductionPopup();
  }
  scrollDeductionPopup(policyIndex, event) {
    this.selectedPolicyIndex = policyIndex;
    this.policyPremiums =
      this.filteredInsuranceCompaines[policyIndex].premiumDetails;
    if (!event) {
      this.deductionSelectedIndex[policyIndex] > 0 &&
        this.deductionSelectedIndex[policyIndex]--;
    } else {
      this.deductionSelectedIndex[policyIndex] <
        this.policyPremiums.length - 1 &&
        this.deductionSelectedIndex[policyIndex]++;
    }
    // this.deductionSelectedIndex[policyIndex] = this.selectedDeductionIndex;
  }
  popupScrollDeductionPopup(event) {
    // this.policyPremiums = this.insuranceCompaines[policyIndex].premiumDetails;
    // if (!event) {
    //   this.selectedDeductionIndex > 0 && this.selectedDeductionIndex--;
    // } else {
    //   this.selectedDeductionIndex < this.policyPremiums.length &&
    //     this.selectedDeductionIndex++;
    // }
  }
  onRemoveVehicle(index) {
    if (this.policies.length > 1) {
      if (this.savedVehicles[index]?.saved)
        this.grandTotal &&
          (this.grandTotal -=
            this.savedVehicles[index].policyDetails.premium.totalPremium);
      this.savedVehicles.splice(index, 1);
      this.policies.splice(index, 1);
      if (this.selectedItem && this.selectedItem >= index) {
        this.selectedItem -= 1;
        this.selectItem(this.selectedItem);
        this.policy = this.filteredInsuranceCompaines[this.selectedItem];
        this.selectedDeductionIndex =
          this.savedVehicles[this.selectedItem].deductableIndex;
        this.selectedTab = this.savedVehicles[this.selectedItem].selectedTab;
        this.selectedPolicyIndex =
          this.savedVehicles[this.selectedVehicleIndex]['policyIndex'];
      }
      this.compeletedVehicles = this.savedVehicles.filter(
        (x) => x.saved == true
      ).length;
    } else {
      this._sharedUtils.showToast('Should have atleast one vehicle', '0');
      return;
    }
  }
}
