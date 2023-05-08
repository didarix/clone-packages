import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YouxelTableComponent } from './youxel-table.component';

describe('YouxelTableComponent', () => {
  let component: YouxelTableComponent;
  let fixture: ComponentFixture<YouxelTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YouxelTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YouxelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
