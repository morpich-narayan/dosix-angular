import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceNotFoundComponent } from './service-not-found.component';

describe('ServiceNotFoundComponent', () => {
  let component: ServiceNotFoundComponent;
  let fixture: ComponentFixture<ServiceNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceNotFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
