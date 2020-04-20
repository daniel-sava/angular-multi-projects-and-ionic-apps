import { TestBed } from '@angular/core/testing';

import { Library2Service } from './library2.service';

describe('Library2Service', () => {
  let service: Library2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Library2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
