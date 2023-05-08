import { TestBed } from '@angular/core/testing';

import { YouxelFormService } from './youxel-form.service';

describe('YouxelFormService', () => {
  let service: YouxelFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YouxelFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
