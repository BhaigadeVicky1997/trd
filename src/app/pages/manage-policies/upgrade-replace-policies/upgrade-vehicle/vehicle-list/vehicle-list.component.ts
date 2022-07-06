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
  procesQuoteDisplay:boolean = false;
  vehicleListDisaply:boolean = true;

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
    this.procesQuoteDisplay= true;
      this.vehicleListDisaply = false;
    setTimeout(() => {

      this._router.navigateByUrl(
        '/wazen/manage-policies/upgrade-policies-tabs/choose-quote/view-quote-request'
      );
    }, 4000);

  }

}
