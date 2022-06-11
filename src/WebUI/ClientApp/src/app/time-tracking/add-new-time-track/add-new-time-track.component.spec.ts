import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTimeTrackComponent } from './add-new-time-track.component';

describe('AddNewTimeTrackComponent', () => {
  let component: AddNewTimeTrackComponent;
  let fixture: ComponentFixture<AddNewTimeTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewTimeTrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewTimeTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
