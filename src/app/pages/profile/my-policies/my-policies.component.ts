import { Component, OnInit } from '@angular/core';
import { IPolicy, IPolicyResponse } from '../../../models/IPolicy';
import { AuthService } from '../../../services/auth.service';
import { PolicyService } from '../../../services/policy.service';

@Component({
  selector: 'app-my-policies',
  templateUrl: './my-policies.component.html',
  styleUrls: ['./my-policies.component.scss'],
  host: {
    class: 'tab-pane fade show active',
    id: 'profile-policies',
    role: 'tabpanel',
    'aria-labelledby': 'policies-tab',
  },
})
export class MyPoliciesComponent implements OnInit {
  policies: IPolicy[] = [];
  isLoading: boolean = false;
  customerId = '';
  constructor(
    private _policyService: PolicyService,
    private _authService: AuthService
  ) {
    let userState: any = this._authService.userState.value;
    this.customerId = userState.id;
  }

  ngOnInit(): void {
    this.getPolicyByCustomerId();
  }

  getPolicyByCustomerId() {
    this._policyService.getPolicyByCustomerId(this.customerId).subscribe(
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
}
