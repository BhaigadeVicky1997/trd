import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  vehicleBlock:any='none';

  showAddNewVehiclePopup()
  {
    this.vehicleBlock ='block';
  }

  addVehicle(){
    this.vehicleBlock ='none';
  }

  closeVehicle(){
    this.vehicleBlock = 'none';
  }

  getView(){
    this._router.navigateByUrl(
      '/wazen/manage-policies/add-delete-tabs/vehicles/vehicle-view'
    );
  }

}
