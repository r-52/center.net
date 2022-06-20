import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTimeEntryModalComponent } from './add-new-time-entry-modal.component';

describe('AddNewTimeEntryModalComponent', () => {
  let component: AddNewTimeEntryModalComponent;
  let fixture: ComponentFixture<AddNewTimeEntryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewTimeEntryModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddNewTimeEntryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
