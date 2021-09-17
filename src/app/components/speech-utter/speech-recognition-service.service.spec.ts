import { TestBed } from '@angular/core/testing';

import { SpeechRecognitionServiceService } from './speech-recognition-service.service';

describe('SpeechRecognitionServiceService', () => {
  let service: SpeechRecognitionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeechRecognitionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
