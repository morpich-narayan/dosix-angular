import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadTopbarContantComponent } from './load-topbar-contant.component';

describe('LoadTopbarContantComponent', () => {
  let component: LoadTopbarContantComponent;
  let fixture: ComponentFixture<LoadTopbarContantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadTopbarContantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadTopbarContantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
