import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
  host: {
    class: 'tab-pane fade',
    id: 'profile-account',
    role: 'tabpanel',
    'aria-labelledby': 'account-tab',
  },
})
export class MyAccountComponent implements OnInit {
  constructor(private _profileService: ProfileService) {}

  ngOnInit(): void {}

  onTabSelect(url: string) {
    this._profileService.onMyAccountTabChanged.next(url);
  }
}
