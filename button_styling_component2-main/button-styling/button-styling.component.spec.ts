import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonStylingComponent } from './button-styling.component';

describe('ButtonStylingComponent', () => {
  let component: ButtonStylingComponent;
  let fixture: ComponentFixture<ButtonStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonStylingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
