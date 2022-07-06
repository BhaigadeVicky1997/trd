import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelPoliciesReviewComponent } from './cancel-policies-review.component';

describe('CancelPoliciesReviewComponent', () => {
  let component: CancelPoliciesReviewComponent;
  let fixture: ComponentFixture<CancelPoliciesReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelPoliciesReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelPoliciesReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
