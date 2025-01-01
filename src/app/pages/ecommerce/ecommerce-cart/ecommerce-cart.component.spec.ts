import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceCartComponent } from './ecommerce-cart.component';

describe('EcommerceCartComponent', () => {
  let component: EcommerceCartComponent;
  let fixture: ComponentFixture<EcommerceCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcommerceCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
