import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammaticControlComponent } from './programmatic-control.component';

describe('ProgrammaticControlComponent', () => {
  let component: ProgrammaticControlComponent;
  let fixture: ComponentFixture<ProgrammaticControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammaticControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammaticControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
