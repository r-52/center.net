import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWeekTableCardComponent } from './work-week-table-card.component';

describe('WorkWeekTableCardComponent', () => {
  let component: WorkWeekTableCardComponent;
  let fixture: ComponentFixture<WorkWeekTableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkWeekTableCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkWeekTableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
