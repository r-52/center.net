import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimeButtonComponent } from './add-time-button.component';

describe('AddTimeButtonComponent', () => {
  let component: AddTimeButtonComponent;
  let fixture: ComponentFixture<AddTimeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTimeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTimeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
