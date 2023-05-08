import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouxelClientSideTableComponent } from './youxel-clientSide-table.component';

describe('YouxelClientSideTableComponent', () => {
  let component: YouxelClientSideTableComponent;
  let fixture: ComponentFixture<YouxelClientSideTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YouxelClientSideTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YouxelClientSideTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
