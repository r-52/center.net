import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWeekTimeTableComponent } from './work-week-time-table.component';

describe('WorkWeekTimeTableComponent', () => {
  let component: WorkWeekTimeTableComponent;
  let fixture: ComponentFixture<WorkWeekTimeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkWeekTimeTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkWeekTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
