import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: string = '';

  constructor(private _authService: AuthService) {
    this._authService.userState.subscribe((res: any) => {
      if (Object.keys(res).length) {
        this.user = res.username;
      }
    });
  }

  ngOnInit(): void {}
}
