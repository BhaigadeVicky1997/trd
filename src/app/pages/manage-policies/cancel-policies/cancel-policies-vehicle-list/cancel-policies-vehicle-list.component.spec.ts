import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelPoliciesVehicleListComponent } from './cancel-policies-vehicle-list.component';

describe('CancelPoliciesVehicleListComponent', () => {
  let component: CancelPoliciesVehicleListComponent;
  let fixture: ComponentFixture<CancelPoliciesVehicleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelPoliciesVehicleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelPoliciesVehicleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
