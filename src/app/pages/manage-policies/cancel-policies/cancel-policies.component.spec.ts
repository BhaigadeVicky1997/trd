import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelPoliciesComponent } from './cancel-policies.component';

describe('CancelPoliciesComponent', () => {
  let component: CancelPoliciesComponent;
  let fixture: ComponentFixture<CancelPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelPoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
