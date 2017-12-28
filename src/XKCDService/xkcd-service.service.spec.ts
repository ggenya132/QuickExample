import { TestBed, inject } from '@angular/core/testing';

import { XkcdServiceService } from './xkcd-service.service';

describe('XkcdServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XkcdServiceService]
    });
  });

  it('should be created', inject([XkcdServiceService], (service: XkcdServiceService) => {
    expect(service).toBeTruthy();
  }));
});
