import { ComponentFixture, TestBed } from '@angular/core/testing';

import { numbersComponenet } from './numbers.component';

describe('TextControlRightIconComponent', () => {
  let component: numbersComponenet;
  let fixture: ComponentFixture<numbersComponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ numbersComponenet ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(numbersComponenet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
