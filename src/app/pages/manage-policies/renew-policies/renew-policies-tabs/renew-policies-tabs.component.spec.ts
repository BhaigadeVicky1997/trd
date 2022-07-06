import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewPoliciesTabsComponent } from './renew-policies-tabs.component';

describe('RenewPoliciesTabsComponent', () => {
  let component: RenewPoliciesTabsComponent;
  let fixture: ComponentFixture<RenewPoliciesTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewPoliciesTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewPoliciesTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
