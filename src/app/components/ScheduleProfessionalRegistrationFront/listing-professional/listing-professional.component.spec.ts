import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingProfessionalComponent } from './listing-professional.component';

describe('ListingProfessionalComponent', () => {
  let component: ListingProfessionalComponent;
  let fixture: ComponentFixture<ListingProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingProfessionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
