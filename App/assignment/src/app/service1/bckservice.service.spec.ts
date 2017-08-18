import { TestBed, inject } from '@angular/core/testing';

import { BckserviceService } from './bckservice.service';

describe('BckserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BckserviceService]
    });
  });

  it('should be created', inject([BckserviceService], (service: BckserviceService) => {
    expect(service).toBeTruthy();
  }));
});
