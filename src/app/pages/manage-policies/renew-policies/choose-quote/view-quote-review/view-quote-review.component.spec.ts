import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuoteReviewComponent } from './view-quote-review.component';

describe('ViewQuoteReviewComponent', () => {
  let component: ViewQuoteReviewComponent;
  let fixture: ComponentFixture<ViewQuoteReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewQuoteReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQuoteReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
