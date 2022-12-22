import { SpecialtyService } from './specialty.service';
import { TestBed } from '@angular/core/testing';

describe('HospitalService', () => {
  let service: SpecialtyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialtyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
