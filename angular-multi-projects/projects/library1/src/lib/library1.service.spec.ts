import { TestBed } from '@angular/core/testing';

import { Library1Service } from './library1.service';

describe('Library1Service', () => {
  let service: Library1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Library1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
