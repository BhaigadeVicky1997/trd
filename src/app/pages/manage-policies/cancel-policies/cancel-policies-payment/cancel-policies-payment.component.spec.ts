import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelPoliciesPaymentComponent } from './cancel-policies-payment.component';

describe('CancelPoliciesPaymentComponent', () => {
  let component: CancelPoliciesPaymentComponent;
  let fixture: ComponentFixture<CancelPoliciesPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelPoliciesPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelPoliciesPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
