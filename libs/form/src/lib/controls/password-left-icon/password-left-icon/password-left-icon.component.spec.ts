import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordLeftIconComponent } from './password-left-icon.component';

describe('PasswordLoginComponent', () => {
  let component: PasswordLeftIconComponent;
  let fixture: ComponentFixture<PasswordLeftIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordLeftIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordLeftIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
