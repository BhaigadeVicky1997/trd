import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelPoliciesThankYouComponent } from './cancel-policies-thank-you.component';

describe('CancelPoliciesThankYouComponent', () => {
  let component: CancelPoliciesThankYouComponent;
  let fixture: ComponentFixture<CancelPoliciesThankYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelPoliciesThankYouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelPoliciesThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
