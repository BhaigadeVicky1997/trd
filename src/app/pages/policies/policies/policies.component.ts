import { PolicyService } from './../../../services/policy.service';
import { IPolicy, IPolicyResponse } from './../../../models/IPolicy';
import { IStatus } from './../../../models/IStatus';
import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent implements OnInit {

  constructor(private _policyService:PolicyService, private _router:Router ) { }
  policies: IPolicy[] = [];
  isLoading: boolean = false;
  CustomerId = "3fa85f64-5717-4562-b3fc-2c963f66afa8";

  ngOnInit():void {
    this.getPolicyByCustomerId(this.CustomerId)
  }

  getPolicyByCustomerId(CustomerId){
    this._policyService.getPolicyByCustomerId(CustomerId).subscribe(
      (res: IPolicyResponse) => {
        console.log(res);
        if (res.succeeded) {
          this.policies = res.data;
        }
        this.isLoading = false;
      },
      (err) => (this.isLoading = false)
    );
  }

  owlSetup() {
    $('input[name="transactions-dates"]').daterangepicker();
  }


}
