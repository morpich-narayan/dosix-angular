import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorStaffListComponent } from './doctor-staff-list.component';

describe('DoctorStaffListComponent', () => {
  let component: DoctorStaffListComponent;
  let fixture: ComponentFixture<DoctorStaffListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorStaffListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorStaffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
