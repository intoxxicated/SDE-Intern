import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulAlertComponent } from './successful-alert.component';

describe('SuccessfulAlertComponent', () => {
  let component: SuccessfulAlertComponent;
  let fixture: ComponentFixture<SuccessfulAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessfulAlertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccessfulAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
