import { TestBed } from '@angular/core/testing';

import { Verifier1Service } from './verifier1.service';

describe('Verifier1Service', () => {
  let service: Verifier1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Verifier1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
