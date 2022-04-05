import { Component, OnInit } from '@angular/core';
import {
  ICustomerTransaction,
  ICustomerTransactionResponse,
} from 'src/app/models/ICustomerTransaction';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import * as moment from 'moment';
import { SharedUtils } from 'src/app/utils/shared-utils';

@Component({
  selector: 'app-my-transaction',
  templateUrl: './my-transaction.component.html',
  styleUrls: ['./my-transaction.component.scss'],
  host: {
    class: 'tab-pane fade',
    id: 'profile-transactions',
    role: 'tabpanel',
    'aria-labelledby': 'transactions-tab',
  },
})
export class MyTransactionComponent implements OnInit {
  isLoading: boolean = false;
  transactions: ICustomerTransaction[] = [];
  userId: string;
  constructor(
    private _profileService: ProfileService,
    private _authService: AuthService,
    private _sharedUtils: SharedUtils
  ) {
    let userState: any = this._authService.userState.value;
    this.userId = userState.id;
  }

  ngOnInit(): void {
    // this._sharedUtils.showSpinner();
    this.getMyTransactions();
  }

  getMyTransactions() {
    this.isLoading = true;
    this._profileService.getMyTransactions(this.userId).subscribe(
      (res: ICustomerTransactionResponse) => {
        if (res.succeeded) {
          this.transactions = res.data;
        }
        this.isLoading = false;
      },
      (err) => (this.isLoading = false)
    );
  }
  getMyTransactionsByDate(event) {
    this.isLoading = true;
    let from = moment(event[0]).format('YYYY-M-D'),
      to = moment(event[1]).format('YYYY-M-D');
    this._profileService
      .getMyTransactionsByDate(this.userId, from, to)
      .subscribe(
        (res: ICustomerTransactionResponse) => {
          if (res.succeeded) {
            this.transactions = res.data;
          }
          this.isLoading = false;
        },
        (err) => (this.isLoading = false)
      );
  }
}
