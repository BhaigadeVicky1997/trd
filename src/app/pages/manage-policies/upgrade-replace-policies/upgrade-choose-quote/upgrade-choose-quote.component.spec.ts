import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeChooseQuoteComponent } from './upgrade-choose-quote.component';

describe('UpgradeChooseQuoteComponent', () => {
  let component: UpgradeChooseQuoteComponent;
  let fixture: ComponentFixture<UpgradeChooseQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradeChooseQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeChooseQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
