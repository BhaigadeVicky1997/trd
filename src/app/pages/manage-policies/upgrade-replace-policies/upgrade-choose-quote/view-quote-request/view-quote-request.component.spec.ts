import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuoteRequestComponent } from './view-quote-request.component';

describe('ViewQuoteRequestComponent', () => {
  let component: ViewQuoteRequestComponent;
  let fixture: ComponentFixture<ViewQuoteRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewQuoteRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQuoteRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
