import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradePoliciesTabsComponent } from './upgrade-policies-tabs.component';

describe('UpgradePoliciesTabsComponent', () => {
  let component: UpgradePoliciesTabsComponent;
  let fixture: ComponentFixture<UpgradePoliciesTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradePoliciesTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradePoliciesTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
