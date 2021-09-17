import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechUtterComponent } from './speech-utter.component';

describe('SpeechUtterComponent', () => {
  let component: SpeechUtterComponent;
  let fixture: ComponentFixture<SpeechUtterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeechUtterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechUtterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
