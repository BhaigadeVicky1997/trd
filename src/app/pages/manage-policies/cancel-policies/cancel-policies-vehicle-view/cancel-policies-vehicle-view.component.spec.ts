import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelPoliciesVehicleViewComponent } from './cancel-policies-vehicle-view.component';

describe('CancelPoliciesVehicleViewComponent', () => {
  let component: CancelPoliciesVehicleViewComponent;
  let fixture: ComponentFixture<CancelPoliciesVehicleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelPoliciesVehicleViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelPoliciesVehicleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
