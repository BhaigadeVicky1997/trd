import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelPoliciesBankDetailsComponent } from './cancel-policies-bank-details.component';

describe('CancelPoliciesBankDetailsComponent', () => {
  let component: CancelPoliciesBankDetailsComponent;
  let fixture: ComponentFixture<CancelPoliciesBankDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelPoliciesBankDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelPoliciesBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
