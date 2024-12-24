import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadComponateComponent } from './load-componate.component';

describe('LoadComponateComponent', () => {
  let component: LoadComponateComponent;
  let fixture: ComponentFixture<LoadComponateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadComponateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadComponateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
