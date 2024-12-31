import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsLeafletComponent } from './maps-leaflet.component';

describe('MapsLeafletComponent', () => {
  let component: MapsLeafletComponent;
  let fixture: ComponentFixture<MapsLeafletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapsLeafletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapsLeafletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
