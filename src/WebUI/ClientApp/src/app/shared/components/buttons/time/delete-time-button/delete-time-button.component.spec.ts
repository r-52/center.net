import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTimeButtonComponent } from './delete-time-button.component';

describe('DeleteTimeButtonComponent', () => {
  let component: DeleteTimeButtonComponent;
  let fixture: ComponentFixture<DeleteTimeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTimeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTimeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
