import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceCustomersComponent } from './ecommerce-customers.component';

describe('EcommerceCustomersComponent', () => {
  let component: EcommerceCustomersComponent;
  let fixture: ComponentFixture<EcommerceCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcommerceCustomersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
