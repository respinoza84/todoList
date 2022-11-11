import { TestBed } from '@angular/core/testing';

import { JSOPlacerholderService } from './jsoplacerholder.service';

describe('JSOPlacerholderService', () => {
  let service: JSOPlacerholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JSOPlacerholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
