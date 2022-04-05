import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IInsuranceCompanies, IInsuranceCompaniesResponse } from 'src/app/models/IInsuranceCompanies';
import { GlobalService } from 'src/app/services/global.service';
import { InsuranceCompaniesService } from 'src/app/services/insurance-companies.service';

@Component({
  selector: 'app-claim-reference',
  templateUrl: './claim-reference.component.html',
  styleUrls: ['./claim-reference.component.scss'],
})
export class ClaimReferenceComponent implements OnInit {
  claimReferenceForm: FormGroup;
  isSubmitted: boolean = false;
  insuranceCompanies: IInsuranceCompanies[] = [];
  constructor(
    private _router: Router,
    private readonly route: ActivatedRoute,
    private _globalService: GlobalService,
    private _insuranceCompaniesService: InsuranceCompaniesService
  ) { }

  ngOnInit(): void {
    this.claimReferenceForm = new FormGroup({
      policyNumber: new FormControl('', [Validators.required]),
      najmCaseNumber: new FormControl('', [Validators.required]),
      nationalIDIQAMACR: new FormControl('', [Validators.required]),
      dateofLoss: new FormControl('', [Validators.required]),
    })

    this._insuranceCompaniesService.getInsuranceCompanies().subscribe(
      (res: IInsuranceCompaniesResponse) => {
        if (res.succeeded) {
          this.insuranceCompanies = res.data;
          console.log("Insurance companies Names-",this.insuranceCompanies);
        }
      }
    );
  }

  next() {
    this.isSubmitted = true;
    for (const i in this.claimReferenceForm.controls) {
      this.claimReferenceForm.controls[i].markAsDirty();
      this.claimReferenceForm.controls[i].updateValueAndValidity();
    }
    if (this.claimReferenceForm.valid) {
      this._globalService.claimPolicy.next(this.claimReferenceForm.value);
      if (this._router.url.startsWith('/wazen/claim/third')) {
        this._router.navigate(['../third-party-damage'], {
          relativeTo: this.route,
        });
      } else {
        this._router.navigate(['../own-damage'], { relativeTo: this.route });
      }
    } else this.isSubmitted = false;
  }
}
