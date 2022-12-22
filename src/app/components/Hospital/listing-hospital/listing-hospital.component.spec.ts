import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingHospitalComponent } from './listing-hospital.component';

describe('ListingHospitalComponent', () => {
  let component: ListingHospitalComponent;
  let fixture: ComponentFixture<ListingHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingHospitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
