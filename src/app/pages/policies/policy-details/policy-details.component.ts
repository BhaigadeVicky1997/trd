import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IPolicyDetails,
  IPolicyDetailsResponse,
} from 'src/app/models/IPolicyDetails';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.scss'],
})
export class PolicyDetailsComponent implements OnInit {
  policy: IPolicyDetails;
  Id: any;
  grandTotal: number = 0;
  additionalCoverages: any[] = [];
  constructor(
    private _policyService: PolicyService,
    private _activeRoute: ActivatedRoute
  ) {
    this.Id = this._activeRoute.snapshot.params.Id;
  }

  ngOnInit(): void {
    this.Id && this.getPolicyById();
  }

  getPolicyById() {
    this._policyService
      .getPolicyById(this.Id)
      .subscribe((res: IPolicyDetailsResponse) => {
        debugger
        this.additionalCoverages = JSON.parse(res.data['additionalCoverage']);
        this.policy = res.data;
        this.grandTotal =
          parseInt(this.policy['additionalCoverageAmount']) +
          parseInt(this.policy['premiumAmount']) +
          parseInt(this.policy['vat']) +
          parseInt(this.policy['serviceChargeAmount']);
        console.log(this.policy);
      });
  }
}
