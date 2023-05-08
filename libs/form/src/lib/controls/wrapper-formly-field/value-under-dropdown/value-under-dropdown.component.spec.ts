import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueUnderDropdownComponent } from './value-under-dropdown.component';

describe('ValueUnderDropdownComponent', () => {
  let component: ValueUnderDropdownComponent;
  let fixture: ComponentFixture<ValueUnderDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueUnderDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueUnderDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
