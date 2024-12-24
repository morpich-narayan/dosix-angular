import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashoboardEcommerceComponent } from './dashoboard-ecommerce.component';

describe('DashoboardEcommerceComponent', () => {
  let component: DashoboardEcommerceComponent;
  let fixture: ComponentFixture<DashoboardEcommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashoboardEcommerceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashoboardEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
