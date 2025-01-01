import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceProductDetailsComponent } from './ecommerce-product-details.component';

describe('EcommerceProductDetailsComponent', () => {
  let component: EcommerceProductDetailsComponent;
  let fixture: ComponentFixture<EcommerceProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcommerceProductDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
