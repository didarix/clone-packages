import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugFormlyComponent } from './debug-formly.component';

describe('DebugFormlyComponent', () => {
  let component: DebugFormlyComponent;
  let fixture: ComponentFixture<DebugFormlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebugFormlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugFormlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
