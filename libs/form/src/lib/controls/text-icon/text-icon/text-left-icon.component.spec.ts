import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextIconComponent } from './text-left-icon.component';

describe('TextControlRightIconComponent', () => {
  let component: TextIconComponent;
  let fixture: ComponentFixture<TextIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
