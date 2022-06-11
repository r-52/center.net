import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { CalendarWeekDatepickerComponent } from './calendar-week-datepicker.component';
import { MaterialModule } from 'src/app/material.module';
import { MatDatepickerInputHarness } from '@angular/material/datepicker/testing';

describe('CalendarWeekDatepickerComponent', () => {
  let component: CalendarWeekDatepickerComponent;
  let fixture: ComponentFixture<CalendarWeekDatepickerComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarWeekDatepickerComponent],
      imports: [MaterialModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarWeekDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load all datepicker input harnesses', async () => {
    const inputs = await loader.getAllHarnesses(MatDatepickerInputHarness);
    expect(inputs.length).toBe(1);
  });
});
