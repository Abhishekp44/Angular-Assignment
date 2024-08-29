import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoresListComponentComponent } from './chores-list-component.component';

describe('ChoresListComponentComponent', () => {
  let component: ChoresListComponentComponent;
  let fixture: ComponentFixture<ChoresListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoresListComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoresListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
