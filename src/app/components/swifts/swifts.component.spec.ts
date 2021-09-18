import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiftsComponent } from './swifts.component';

describe('SwiftsComponent', () => {
  let component: SwiftsComponent;
  let fixture: ComponentFixture<SwiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
