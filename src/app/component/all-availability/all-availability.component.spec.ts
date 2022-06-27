import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAvailabilityComponent } from './all-availability.component';

describe('AllAvailabilityComponent', () => {
  let component: AllAvailabilityComponent;
  let fixture: ComponentFixture<AllAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAvailabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
