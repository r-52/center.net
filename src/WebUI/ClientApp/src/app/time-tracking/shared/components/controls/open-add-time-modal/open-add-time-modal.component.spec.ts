import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAddTimeModalComponent } from './open-add-time-modal.component';

describe('OpenAddTimeModalComponent', () => {
  let component: OpenAddTimeModalComponent;
  let fixture: ComponentFixture<OpenAddTimeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenAddTimeModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OpenAddTimeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
