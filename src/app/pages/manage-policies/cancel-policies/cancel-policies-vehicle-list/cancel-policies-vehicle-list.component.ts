import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-policies-vehicle-list',
  templateUrl: './cancel-policies-vehicle-list.component.html',
  styleUrls: ['./cancel-policies-vehicle-list.component.scss']
})
export class CancelPoliciesVehicleListComponent implements OnInit {

  constructor(
    private _router:Router,
  ) { }

  ngOnInit(): void {
  }

  vehicleBlock:any='none';
  addVehicleConfirm:boolean = false;
  vehicleDisplay:boolean = true;
  vehicleList:boolean = false;

  showAddNewVehiclePopup()
  {
    this.vehicleDisplay = true;
    this.vehicleBlock ='block';
    this.vehicleList = false;
  }

  addVehicle(){
    this.addVehicleConfirm = true;
    this.vehicleDisplay = false;

    setTimeout(() => {
      this.addVehicleConfirm = false;
      this.vehicleDisplay= false;
      this.vehicleBlock = 'none';
      this.vehicleList = true;
    }, 2000);
  }

  closeVehicle(){
    this.addVehicleConfirm = false;
    this.vehicleDisplay = true;
    this.vehicleBlock = 'none';
  }

  getView(){
    this._router.navigateByUrl(
      '/wazen/manage-policies/cancel-policies-tabs/vehicle-view'
    );
  }


}
