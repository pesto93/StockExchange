import { TestBed, inject } from '@angular/core/testing';

import { GloballEventManagerService } from './globall-event-manager.service';

describe('GloballEventManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GloballEventManagerService]
    });
  });

  it('should ...', inject([GloballEventManagerService], (service: GloballEventManagerService) => {
    expect(service).toBeTruthy();
  }));
});
