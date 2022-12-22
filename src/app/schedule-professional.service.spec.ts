import { TestBed } from '@angular/core/testing';

import { ScheduleProfessionalService } from './schedule-professional.service';

describe('ScheduleProfessionalService', () => {
  let service: ScheduleProfessionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleProfessionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
