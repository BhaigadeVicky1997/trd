import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeVehicleComponent } from './upgrade-vehicle.component';

describe('UpgradeVehicleComponent', () => {
  let component: UpgradeVehicleComponent;
  let fixture: ComponentFixture<UpgradeVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradeVehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
