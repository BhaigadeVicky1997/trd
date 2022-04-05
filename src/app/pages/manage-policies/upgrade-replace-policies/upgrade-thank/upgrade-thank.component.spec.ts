import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeThankComponent } from './upgrade-thank.component';

describe('UpgradeThankComponent', () => {
  let component: UpgradeThankComponent;
  let fixture: ComponentFixture<UpgradeThankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradeThankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeThankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
