import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-loader',
  templateUrl: './vehicle-loader.component.html',
  styleUrls: ['./vehicle-loader.component.scss']
})
export class VehicleLoaderComponent implements OnInit {
  constructor(private _router: Router, private readonly _route: ActivatedRoute) { }

  ngOnInit(): void {
    setTimeout(() => {
      this._router.navigate(['../../review'], { relativeTo: this._route });
    }, 3000);
  }

}
