/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { AesEncrDecrService } from './aes-encr-decr.service';

describe('Service: EncrDecr', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AesEncrDecrService]
    });
  });

  it('should ...', inject([AesEncrDecrService], (service: AesEncrDecrService) => {
    expect(service).toBeTruthy();
  }));
});
