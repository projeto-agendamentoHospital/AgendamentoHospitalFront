import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentationListingProfessionalComponent } from './apresentation-listing-professional.component';

describe('ApresentationListingProfessionalComponent', () => {
  let component: ApresentationListingProfessionalComponent;
  let fixture: ComponentFixture<ApresentationListingProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApresentationListingProfessionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApresentationListingProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
