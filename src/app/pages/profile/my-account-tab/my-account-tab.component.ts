import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-my-account-tab',
  templateUrl: './my-account-tab.component.html',
  styleUrls: ['./my-account-tab.component.scss'],
})
export class MyAccountTabComponent implements OnInit {
  constructor(
    private _profileService: ProfileService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._profileService.onMyAccountTabChanged.subscribe((res) => {
      this._router.navigateByUrl(res);
    });
  }
}
