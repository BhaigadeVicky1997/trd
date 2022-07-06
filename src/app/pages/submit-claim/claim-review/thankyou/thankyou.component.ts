import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {

  constructor(private _router: Router, private readonly _route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  submitAnotherClaim() {
    this._router.navigate(['../../'], { relativeTo: this._route });
  }
}
