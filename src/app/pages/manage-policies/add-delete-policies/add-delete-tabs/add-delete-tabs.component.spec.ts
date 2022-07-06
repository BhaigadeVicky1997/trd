import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeleteTabsComponent } from './add-delete-tabs.component';

describe('AddDeleteTabsComponent', () => {
  let component: AddDeleteTabsComponent;
  let fixture: ComponentFixture<AddDeleteTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeleteTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeleteTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
