import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseQuoteComponent } from './choose-quote.component';

describe('ChooseQuoteComponent', () => {
  let component: ChooseQuoteComponent;
  let fixture: ComponentFixture<ChooseQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
