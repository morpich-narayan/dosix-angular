import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceAddProductComponent } from './ecommerce-add-product.component';

describe('EcommerceAddProductComponent', () => {
  let component: EcommerceAddProductComponent;
  let fixture: ComponentFixture<EcommerceAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcommerceAddProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
