import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewBankComponent } from './review-bank.component';

describe('ReviewBankComponent', () => {
  let component: ReviewBankComponent;
  let fixture: ComponentFixture<ReviewBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
