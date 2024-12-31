import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiNotificationsComponent } from './ui-notifications.component';

describe('UiNotificationsComponent', () => {
  let component: UiNotificationsComponent;
  let fixture: ComponentFixture<UiNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiNotificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
