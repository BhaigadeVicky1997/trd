import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  vehicleBlock:any='none';
  vehicleListDisaply:boolean = true;
  confirmDispaly:boolean = false;


  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
  }


  showAddNewVehiclePopup()
  {
    this.vehicleBlock ='block';
  }

  addVehicle(){
    this.vehicleBlock ='none';
    this.vehicleListDisaply = false;
    this.confirmDispaly = true;

    setTimeout(() => {
      this.vehicleListDisaply = true;
      this.confirmDispaly = false;
      this.vehicleBlock = 'none';
    }, 2000);
  }

  closeVehicle(){
    this.vehicleBlock = 'none';
  }

  getView(){
    this._router.navigateByUrl('/wazen/manage-policies/renew-policies-tabs/choose-quote/view-quote-request');
  }

}
