import { TestBed } from '@angular/core/testing';

import { DateHijriService } from './date-hijri.service';

describe('DateHijriService', () => {
  let service: DateHijriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateHijriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
