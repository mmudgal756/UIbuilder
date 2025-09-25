import { TestBed } from '@angular/core/testing';

import { ElementNaming } from './element-naming';

describe('ElementNaming', () => {
  let service: ElementNaming;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementNaming);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
