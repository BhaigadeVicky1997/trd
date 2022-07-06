import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelPoliciesVerificationComponent } from './cancel-policies-verification.component';

describe('CancelPoliciesVerificationComponent', () => {
  let component: CancelPoliciesVerificationComponent;
  let fixture: ComponentFixture<CancelPoliciesVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelPoliciesVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelPoliciesVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
