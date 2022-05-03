import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent implements OnInit, OnDestroy {
  constructor(private _globalService: GlobalService, private _router: Router, private _activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._globalService.vehicalLocalList.subscribe((res: any) => {
      // if (this._router.url.startsWith('/wazen/quotes'))
      //   if (!res.length) {
      //     this._router.navigateByUrl('/wazen/quotes/vehicles/get-quote');
      //   }
    });
  }

  ngOnDestroy(): void {
    this._globalService.vehicalLocalList.unsubscribe();
  }
}
