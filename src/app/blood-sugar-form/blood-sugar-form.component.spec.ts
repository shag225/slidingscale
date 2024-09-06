import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodSugarFormComponent } from './blood-sugar-form.component';

describe('BloodSugarFormComponent', () => {
  let component: BloodSugarFormComponent;
  let fixture: ComponentFixture<BloodSugarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BloodSugarFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BloodSugarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
