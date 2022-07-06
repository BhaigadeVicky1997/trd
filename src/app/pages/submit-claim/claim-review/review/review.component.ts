import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClaimReviewService } from 'src/app/services/claim-review.service';
import { SharedUtils } from 'src/app/utils/shared-utils';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  isClaimVerified: boolean = true;

  constructor(private _router: Router, private readonly _route: ActivatedRoute,
    private _claimService: ClaimReviewService,
    private _sharedUtils: SharedUtils,) { }

  ngOnInit(): void {
    this.claimsInfo();
  }
  onConfirm() {
    this._router.navigate(['payment'], { relativeTo: this._route });
  }

  claimsInfo() {
    this._claimService.getClaims().subscribe(
      (res: any) => {
        if (res.succeeded) {
        }
      },
      (err: any) => {
        this.isClaimVerified = false;
      }
    );
  }
}
