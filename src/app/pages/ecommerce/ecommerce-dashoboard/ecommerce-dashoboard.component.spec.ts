import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceDashoboardComponent } from './ecommerce-dashoboard.component';

describe('EcommerceDashoboardComponent', () => {
  let component: EcommerceDashoboardComponent;
  let fixture: ComponentFixture<EcommerceDashoboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcommerceDashoboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceDashoboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
