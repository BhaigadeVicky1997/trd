import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-policies-vehicle-view',
  templateUrl: './cancel-policies-vehicle-view.component.html',
  styleUrls: ['./cancel-policies-vehicle-view.component.scss']
})
export class CancelPoliciesVehicleViewComponent implements OnInit {

  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  goToReview(){
    this._router.navigateByUrl(
      '/wazen/manage-policies/cancel-policies-tabs/review'
    );
  }

}
