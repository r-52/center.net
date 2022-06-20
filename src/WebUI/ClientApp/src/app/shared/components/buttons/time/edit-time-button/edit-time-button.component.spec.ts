import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimeButtonComponent } from './edit-time-button.component';

describe('EditTimeButtonComponent', () => {
  let component: EditTimeButtonComponent;
  let fixture: ComponentFixture<EditTimeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditTimeButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditTimeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
