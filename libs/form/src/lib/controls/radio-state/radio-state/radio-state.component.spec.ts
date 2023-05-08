import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioStateComponent } from './radio-state.component';

describe('RadioStateComponent', () => {
  let component: RadioStateComponent;
  let fixture: ComponentFixture<RadioStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
